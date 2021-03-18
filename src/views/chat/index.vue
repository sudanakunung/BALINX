<template>
  <div class="max-h-screen w-full flex flex-col justify-between">
    <div class="flex bgdark " style="height: 10vh">
      <div class="w-20 mr-2 h-full flex items-center justify-center">
        <img
          class="h-12 w-12 rounded-full"
          :src="'http://localhost:3000/' + this.dataRoom.user.avatar"
          alt=""
        />
      </div>
      <div class="h-full flex justify-start items-center space-x-2">
        <h1 class="text">{{ this.dataRoom.user.name }}</h1>
      </div>
    </div>
    <div
      ref="chatBox"
      class="p-3 flex flex-col bg-gray-200 dark:bg-gray-700 justify-end overflow-y-auto space-y-2"
      style="height: 80vh"
    >
      <div
        v-bind:class="user == msg.user ? 'flex-row-reverse' : 'flex-row'"
        class="flex items-end"
        v-for="(msg, index) in messages"
        :key="index"
      >
        <div class="flex flex-col">
          <div>
    
          </div>
          <div>
            <p
              v-bind:class="user == msg.user ? ' bg-gray-300' : ' bg-white'"
              class="max-s rounded-md text-s p-2"
            >
              {{ msg.message }}
            </p>
          </div>
        </div>

        <span class="px-3 text-gray-500 text-xs">{{ date(msg.date) }}</span>
      </div>
    </div>
    <div
      class="relative bgdark flex items-center  px-5"
      style="height: 10vh"
    >
      <form @submit.prevent="sendMessage" class="w-full flex items-center">
        <svg
          class="w-8 h-8 absolute text left-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <input
          v-model="message"
          type="text"
          class="w-full rounded-full border bg-transparent text pl-10 py-2 focus:outline-none"
        />
        <button class="absolute transform rotate-90 right-6 text focus:outline-none">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { mapGetters } from "vuex";
import { io } from "socket.io-client";
const token = localStorage.token;
const socket = io("http://localhost:3000", {
  query: { token },
});
export default {
  data() {
    return {
      user: null,
      message: "",
      messages: [],
      socket: socket,
      dataRoom: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  props: ["chatId"],
  methods: {
    sendMessage(e) {
      e.preventDefault();
    if(this.message){
      this.socket.emit("SEND_MESSAGE", {
        user: this.currentUser._id,
        message: this.message,
        date: new Date(),
        id: this.chatId,
      });
    }
      this.message = "";
      this.scrollToBottom();
    },
    date(timestamp) {
      dayjs.extend(relativeTime);

      var result = dayjs(timestamp).fromNow("mm");
      return result;
    },
    async getRoom() {
      this.dataRoom = await this.$store.dispatch("getConver", this.chatId);
    },
    scrollToBottom() {
      this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
    },
  },

  mounted() {
    socket.emit("join", { id: this.chatId });
    this.socket.on("MESSAGE", (data) => {
      this.messages = [...this.messages, data];
    });
    this.socket.on("login", (data) => {
      console.log(data);
    });
    this.user=this.currentUser._id
    this.getRoom();
    this.scrollToBottom();
  },
};
</script>

<style>
</style>
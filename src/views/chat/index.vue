<template>
  <div class="flex flex-row">
    <div class="max-h-screen w-full flex flex-col justify-between">
      <div class="flex bgdark" style="height: 10vh">
        <div class="w-20 mr-2 h-full flex items-center justify-center">
          <img
            class="h-12 w-12 rounded-full"
            :src="'http://localhost:3000/' + this.dataRoom.user.avatar"
            alt=""
          />
        </div>
        <div class="h-full flex flex-col justify-start items-center space-x-2">
          <h1 class="text text-lg font-bold h-10 flex items-center">
            {{ this.dataRoom.user.name }}
          </h1>
        </div>
      </div>
      <div
        v-on:scroll.passive="handleScroll"
        ref="chatArea"
        class="p-3 flex-col bg-gray-200 dark:bg-gray-700 overflow-y-scroll space-y-2"
        style="height: 80vh; scroll-behavior: smooth"
      >
        <div
          v-bind:class="user == msg.sender ? 'flex-row-reverse' : 'flex-row'"
          class="flex items-end"
          v-for="(msg, index) in messages"
          :key="index"
        >
          <div class="flex flex-col">
            <div></div>
            <div>
              <p
                v-bind:class="user == msg.sender ? ' bg-gray-300' : ' bg-white'"
                class="max-s rounded-md text-s p-2"
              >
                {{ msg.message }}
              </p>
            </div>
          </div>
          <span class="px-3 text-gray-500 text-xs">{{ date(msg.date) }}</span>
        </div>
        <div
          class="max-s rounded-md text-s p-2 bg-white w-40 animate-pulse"
          v-show="userTyping"
        >
          <p class="text-black">typing</p>
        </div>
      </div>

      <div class="relative bgdark flex items-center px-5" style="height: 10vh">
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
            v-on:keyup="typing"
            v-model="message"
            type="text"
            class="w-full rounded-full border bg-transparent text pl-10 py-2 focus:outline-none"
          />
          <button
            class="absolute transform rotate-90 right-6 text focus:outline-none"
          >
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
    <div class="hidden max-h-screen lg:flex h-full w-full justify-end">
      <Chatlist />
    </div>
  </div>
</template>

<script>
import Chatlist from "../../components/chat/chatlist";

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
      dropdownprofile: false,
      tabs: "personal",
      convers: [],
      user: null,
      message: "",
      messages: [],
      socket: socket,
      dataRoom: null,
      pageMessage: null,
      userTyping: false,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },

  components: {
    Chatlist,
  },
  props: ["chatId"],
  methods: {
    handleScroll(e) {
      var scroll = e.target.scrollTop;
      if (scroll === 0) {
        this.getMessage(this.pageMessage + 1);
      }
    },
    async typing() {
      await this.socket.emit("typing", {
        id: this.chatId,
        message: this.message,
        socketid: socket.id,
      });
    },
    async sendMessage(e) {
      e.preventDefault();

      if (this.message) {
        this.socket.emit("SEND_MESSAGE", {
          user: this.currentUser._id,
          message: this.message,
          date: new Date(),
          id: this.chatId,
          to: this.dataRoom.user.online,
        });
      }
      this.message = "";
    },
    date(timestamp) {
      dayjs.extend(relativeTime);

      var result = dayjs(timestamp).fromNow("mm");
      return result;
    },
    async getRoom() {
      this.dataRoom = await this.$store.dispatch("getConver", this.chatId);
    },
    async getMessage(page) {
      var data = {
        roomId: this.chatId,
        page: page,
      };
      var response = await this.$store.dispatch("getMessage", data);
      this.messages = await response.docs.reverse().concat(this.messages);
      this.pageMessage = response.page;
    },
    async getConver() {
      var array = await this.$store.dispatch("getFriend");
      var chatlist = [];
      array.forEach((element) => {
        var user = element.user.find((data) => {
          return data._id != this.currentUser._id;
        });
        element.user = user;
        chatlist.push(element);
      });
      this.convers = chatlist;
    },
    scrollToBottom() {
      let messageDisplay = this.$refs.chatArea;
      setTimeout(() => {
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      }, 100);
    },
  },
  created() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 200);
  },
  mounted() {
    this.getMessage(1);
    this.getConver();
    socket.on("roomChat", () => {
      this.getConver();
    });
    socket.emit("join", { id: this.chatId });
    this.socket.on("MESSAGE", async (data) => {
      this.messages = await [...this.messages, data];
      this.userTyping = false;

      this.scrollToBottom();
    });

    this.socket.on("typing", async (data) => {
      if (socket.id != data.socketid) {
        if (data.message) {
          this.userTyping = true;
        } else {
          this.userTyping = false;
        }
      }
      this.scrollToBottom();
    });

    this.user = this.currentUser._id;
    this.getRoom();
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
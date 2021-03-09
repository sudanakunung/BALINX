<template>
  <div
    class="max-h-screen w-full flex flex-col border border-gray-900 justify-between"
  >
    <div class="flex bg-gray-900 rounded-b-lg" style="height: 10vh">
      <div class="w-20 mr-2 h-full flex items-center justify-center">
        <img
          class="h-12 w-12 rounded-full"
          src="https://scontent.fdps5-1.fna.fbcdn.net/v/t1.0-9/37921553_1447009505400641_8037753745087397888_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGtQb39GDHyatLPv2WwXJ7mVYo_Q_kCH55Vij9D-QIfnnCT6Fm91wF6uBz_L9QPrKiLJzAxlQ9qRaEa3L5EvcOt&_nc_ohc=ByijnzjSpmMAX_0lnnV&_nc_ht=scontent.fdps5-1.fna&oh=cafea5b87c15c4360e986c1e6fea3a88&oe=60468E5A"
          alt=""
        />
      </div>
      <div class="h-full flex justify-start items-center space-x-2">
        <h3 class="text text-lg">Sudana</h3>
      </div>
    </div>
    <div class="px-3 py-5 flex flex-col space-y-2" style="height: 80vh">
      <div class="flex flex-row items-center" v-for="(msg, index) in messages" :key="index">
        <p class="max-w-xs bg-white rounded-md p-2">{{ msg.message }}</p>
        <span class="px-3 text-gray-500 text-xs">10:02</span>
      </div>
     
    </div>
    <div
      class="relative bg-gray-900 flex items-center  rounded-t-lg px-5"
      style="height: 10vh"
    >
      <form @submit.prevent="sendMessage" class="w-full flex items-center ">
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
        <button class="absolute transform rotate-90 right-6 text">
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
const io = require("socket.io-client");
const socket = io("http://192.168.1.96:3000");
export default {
  data() {
    return {
      user: "anjing",
      message: "",
      messages: [],
      socket: socket,
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        message: this.message,
      });
      this.message = "";
    },
  },
  mounted() {
    this.socket.on("MESSAGE", (data) => {
      this.messages = [...this.messages, data];
      //  this.messages.push(data)
    });
  },
};
</script>

<style>
</style>
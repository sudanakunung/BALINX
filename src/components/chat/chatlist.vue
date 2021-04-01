<template>
        <div class="w-3/5 h-full flex flex-col pr-5">
        <div class="py-3">
          <h1 class="text text-2xl">Chat</h1>
        </div>
        <!-- list chat -->
        <div>
          <Search />
          <div class="flex flex-row justify-around mt-5">
            <button
              @click="tabs = 'personal'"
              v-bind:class="
                tabs == 'personal'
                  ? 'dark:border-gray-100 border-gray-800'
                  : 'dark:border-gray-800 border-gray-100'
              "
              class="text border-b-4 focus:outline-none"
            >
              Personal
            </button>
            <button
              @click="tabs = 'group'"
              v-bind:class="
                tabs == 'group'
                  ? 'dark:border-gray-100 border-gray-800'
                  : 'dark:border-gray-800 border-gray-100'
              "
              class="text border-b-4 focus:outline-none"
            >
              Group
            </button>
          </div>
          <div v-if="tabs === 'personal'" class="flex flex-col space-y-3 mt-3">
            <template v-for="conver in convers">
              <router-link
                :ref="`conver${conver._id}`"
                v-bind:key="conver._id"
                :to="{ name: 'chatroom', params: { chatId: conver._id } }"
                class="flex relative rounded-md flex-row px-3 justify-around h-full items-center"
              >
                <div
                  class="absolute hidden -top-2 -right-2 w-5 h-5 items-center justify-center text-white text-sm bg-red-500 rounded-full"
                ></div>
                <div class="w-10 mr-2 h-16 flex items-center justify-center relative">
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="'http://localhost:3000/' + conver.user.avatar"
                    alt=""
                  />
                  
                  <div
                    v-bind:class="
                      conver.user.online ? 'bg-green-500' : 'bg-gray-500'
                    "
                    class="w-3 h-3 rounded-full absolute right-0 bottom-3 border"
                  ></div>
    
                </div>

                <div class="w-full h-full flex flex-col justify-center">
                  <h3 class="text text-lg">{{ conver.user.name }}</h3>
                </div>
              </router-link>
            </template>
          </div>
        </div>

      </div>
</template>

<script>
import { io } from "socket.io-client";

const token = localStorage.token;
const socket = io("http://192.168.1.96:3000", {
  query: { token },
});
import { mapGetters } from "vuex";
import Search from "../../components/input/search";
export default {
  data() {
    return {
      dropdownprofile: false,
      tabs: "personal",
      convers: [],
    };
  },
  components: {
    Search,
  },
  methods: {
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
  },
   computed: {
    ...mapGetters(["currentUser"]),
  },

  mounted() {
    this.getConver();
    socket.on("roomChat", () => {
      this.getConver();
    });
  },
};
</script>
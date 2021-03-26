<template>
  <div class="h-full w-full flex flex-row">
    <div class="w-full h-screen">

    </div>
    <div class="hidden max-h-screen lg:flex h-full w-full justify-end">
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
                  ? 'dark:border-white border-gray-800'
                  : 'dark:border-gray-800 border-white'
              "
              class="text border-b-4 focus:outline-none"
            >
              Personal
            </button>
            <button
              @click="tabs = 'group'"
              v-bind:class="
                tabs == 'group'
                  ? 'dark:border-white border-gray-800'
                  : 'dark:border-gray-800 border-white'
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
                <div class="w-10 mr-2 h-16 flex items-center justify-center">
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="'http://localhost:3000/' + conver.user.avatar"
                    alt=""
                  />
                </div>

                <div class="w-full h-full flex flex-col justify-center">
                  <h3 class="text text-lg">{{ conver.user.name }}</h3>
                </div>

                <div class="h-full w-10 flex items-center justify-center">
                  <div
                    v-bind:class="
                      conver.user.online ? 'bg-green-500' : 'bg-gray-500'
                    "
                    class="w-3 h-3 rounded-full"
                  ></div>
                </div>
              </router-link>
            </template>
          </div>
        </div>
        <!-- chat room -->
        <div class="relative w-full hidden justify-between">
          <div>
            <button class="text flex items-center my-2">
              <svg
                class="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Back
            </button>
          </div>
          <div class="w-full flex space-x-3 text p-3 bg-gray-900">
            <img
              class="h-8 w-8 rounded-full"
              src="https://scontent.fdps5-1.fna.fbcdn.net/v/t1.0-9/37921553_1447009505400641_8037753745087397888_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGtQb39GDHyatLPv2WwXJ7mVYo_Q_kCH55Vij9D-QIfnnCT6Fm91wF6uBz_L9QPrKiLJzAxlQ9qRaEa3L5EvcOt&_nc_ohc=ByijnzjSpmMAX_0lnnV&_nc_ht=scontent.fdps5-1.fna&oh=cafea5b87c15c4360e986c1e6fea3a88&oe=60468E5A"
              alt=""
            />
            <h3>Sudana kunyung</h3>
          </div>
          <div class="h-full w-full border-gray-900 border-2"></div>
          <div class="h-16">
            <input type="text" class="rounded-md" />
          </div>
        </div>
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

<style>
</style>
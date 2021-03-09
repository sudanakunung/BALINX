<template>
  <div class="w-full h-screen">
    <!-- <div class="w-full h-auto">
      <video
        src="../../../src/assets/video/Pexels Videos 1675442.mp4"
        autoplay
        loop
        muted
      ></video>
    </div> -->
    <div class="flex flex-row py-4 px-2 space-x-5 h-24 items-center">
      <div class="w-20">
        <img
          v-if="dataUser.avatar"
          class="h-14 w-14 rounded-full"
          :src="'http://localhost:3000/' + dataUser.avatar"
        />
        <img
          v-else
          class="h-14 w-14 rounded-full"
          src="@/assets/2021-02-28T07-25-36.930Z2736282 (3).jpg"
          alt=""
        />
      </div>
      <div class="w-full">
        <h3 class="text text-2xl">{{ dataUser.name }}</h3>
      </div>
    </div>
    <div class="w-full flex flex-col space-y-2 mb-3">
      <div class="w-full flex justify-between text text-center">
         <div>
          <h5 class="text-base">Post</h5>
          <h4  class="text-sm">{{dataUser.post.length}}</h4>
        </div>
        <div>
          <h5 class="text-base">Following</h5>
          <h4  class="text-sm">{{dataUser.following.length}}</h4>
        </div>
        <div>
          <h5 class="text-base">Follower</h5>
          <h4  class="text-sm">{{dataUser.follower.length}}</h4>
        </div>
       
      </div>
    </div>
    <div class="h-20 w-full text my-2">
      <p>
        ini bio ku
      </p>
    </div>
    <div v-if="currentUser" class="flex flex-row w-full justify-end px-3 space-x-2 my-3">
      <button v-if="!followed" @click="follow" class="bg-gray-300 dark:bg-gray-900 font-bold text w-40 py-2 rounded-md">Follow</button>
       <button v-if="!friended" class="bg-gray-300 dark:bg-gray-900 font-bold text w-40 py-2 rounded-md">Add Friend</button>
    </div>
    <div class="grid grid-cols-3">
      <button
        @click="category = 'all'"
        v-bind:class="
          category == 'all'
            ? 'dark:border-white border-gray-800'
            : 'border-white dark:border-gray-800'
        "
        class="text text-xs md:text-lg border-b-4  py-2 focus:outline-none"
      >
        All
      </button>
      <button
        @click="category = 'collection'"
        v-bind:class="
          category == 'collection'
            ? 'dark:border-white border-gray-800'
            : 'border-white dark:border-gray-800'
        "
        class="text text-xs md:text-lg border-b-4  py-2 focus:outline-none"
      >
        Collection
      </button>
      <button
        @click="category = 'archive'"
        v-bind:class="
          category == 'archive'
            ? 'dark:border-white border-gray-800'
            : 'border-white dark:border-gray-800'
        "
        class="text text-xs md:text-lg border-b-4  py-2 focus:outline-none"
      >
        Archive
      </button>
    </div>
      <div v-if="category === 'all'">
          <Minipost v-bind:userId="this.userId" />
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Minipost from "../../components/post/minipost";
export default {
  data() {
    return {
      category: "all",
      infoUser: false,
      dataUser: [],
      followed:false,
      friended:false
    };
  },
  components: {
    Minipost,
  },
  props: ["userId"],
  methods: {
    async getUser() {
      this.dataUser = await this.$store.dispatch("getUser", this.userId);
    },
    async follow(){
      var data ={
        following:this.currentUser._id,
        follower:this.userId
      }
      this.followed = await this.$store.dispatch("follow",data);
      console.log(this.followed)
    }
  },
    computed: {
    ...mapGetters(["currentUser"]),
  },
  async mounted() {
    await this.getUser();
  },
};
</script>

<style>
</style>
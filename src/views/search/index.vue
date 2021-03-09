<template>
  <div class="w-full h-screen px-10 py-14">
    <div class="w-full relative">
      <input
        type="text"
        class="w-full text dark:bg-gray-900 bg-gray-300 py-3 px-3 rounded-md"
        placeholder=" Search"
        v-model="search"
        @change="searching()"
      />
      <div class="absolute top-3 right-3">
        <svg
          class="w-6 h-6 text"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <div>
      <div class="flex flex-col space-y-2 mt-10">
        <template v-for="user in listUser">
          <router-link
           v-if="user._id!=currentUser._id"
            :key="user._id"
            :to="{ name: 'profileuser', params: { userId: user._id } }"
            class="w-full h-20 rounded-md bg-gray-300 dark:bg-gray-900 flex"
          >
            <div class="px-4 h-full flex items-center justify-start">
              <img
                class="h-10 w-10 rounded-full"
                src="https://scontent.fdps5-1.fna.fbcdn.net/v/t1.0-9/37921553_1447009505400641_8037753745087397888_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGtQb39GDHyatLPv2WwXJ7mVYo_Q_kCH55Vij9D-QIfnnCT6Fm91wF6uBz_L9QPrKiLJzAxlQ9qRaEa3L5EvcOt&_nc_ohc=ByijnzjSpmMAX_0lnnV&_nc_ht=scontent.fdps5-1.fna&oh=cafea5b87c15c4360e986c1e6fea3a88&oe=60468E5A"
                alt=""
              />
            </div>
            <div class="h-full flex items-center">
              <h3 class="text text-lg font-bold">{{ user.name }}</h3>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      listUser: [],
    };
  },
    computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    async searching() {
    
      var data = await this.$store.dispatch("searching", this.search);
      this.listUser = data.data;
      
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="w-full p-10 flex flex-col items-center space-y-4">
    <div class="flex items-center justify-center w-full h-32">
      <div class="w-32 relative flex items-center justify-center h-32">
       <img
          v-if="form.avatar"
          class="h-24 w-24 rounded-full"
          :src="'http://localhost:3000/' + form.avatar"
        />
        <img
          v-else
          class="h-24 w-24 rounded-full"
          src="@/assets/2021-02-28T07-25-36.930Z2736282 (3).jpg"
          alt=""
          ref="avatar"
        />
        <button
          @click="trigger"
          class="absolute bottom-0 right-0 text dark:bg-gray-900 bg-gray-300 p-3 rounded-full"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex space-y-3 flex-col text">
      <div class="flex flex-col">
        <span>Name</span>
        <input
          type="text"
          name=""
          v-model="form.name"
          class="bg-transparent py-1 px-2 text border"
          
        />
      </div>
      <div class="flex flex-col">
        <span>Email</span>
        <input
          type="text"
          name=""
          v-model="form.email"
          disabled
          class="bg-gray-300 dark:bg-gray-600 py-1 px-2 text border"
          
        />
      </div>
      <div class="flex flex-col">
        <span>No Telp</span>
        <input
          type="text"
          name=""
          v-model="form.telp"
          class="bg-transparent py-1 px-2 text border"
          
        />
      </div>
      <div class="flex flex-col">
        <span>Address</span>
        <input
          type="text"
          name=""
          v-model="form.address"
          class="bg-transparent py-1 px-2 text border"
          
        />
      </div>
      <div class="flex-col hidden">
        <span>Address</span>
        <input
          type="file"
          name=""
          ref="avatar"
          @change="uploadavatar"
          class="bg-transparent py-1 px-2 text border"
          id=""
        />
      </div>
      <button @click="updatebio" class="py-2 px-3 rounded-md dark:bg-gray-900 bg-gray-300">
          Save Update
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    trigger() {
      this.$refs.avatar.click();
    },
    async uploadavatar(e) {
      const file = await e.target.files[0];
      let formData = new FormData();
      formData.append("avatar", file);
      formData.append("userId", this.currentUser._id);
      try {
        await axios.post(
          "http://localhost:3000/api/user/avatar",
          formData
        );
        var datauser= await this.$store.dispatch("getUser", this.currentUser._id);
        this.form.avatar=datauser.avatar
         this.$refs.avatar=datauser.avatar
        this.$store.commit('SET_USER',datauser)
      } catch (error) {
        console.log(error);
      }
    },
    async updatebio(){
         try {
        var result = await axios.put(
          "http://localhost:3000/api/user/"+this.currentUser._id,
          this.form
        );
       
         this.$store.commit('SET_USER',this.form)
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.form = this.currentUser;
    console.log(this.form)
  },
};
</script>

<style>
</style>
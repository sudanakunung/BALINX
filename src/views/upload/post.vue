<template>
<div class="h-screen w-full grid grid-cols-2">
  <div class="w-full p-10">
    <div
      v-if="!url"
      @click="trigger"
      class="h-64 border-dashed border-4 border-gray-300 rounded-md w-full flex items-center justify-center"
    >
      <svg
        class="w-24 h-24 text"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
    <input type="file" class="hidden" ref="fileInput" @change="onFileChange" />
    <div v-if="url" class="w-full flex items-center justify-center bg-black">
      <img :src="url" class="h-full" />
    </div>
    <div class="my-5">
      <span class="text">Caption</span>
      <textarea
        v-model="caption"
        name=""
        id=""
        cols="30"
        rows="3"
        class="w-full border text py-1 px-2 bg-transparent"
      >
      </textarea>
      <span class="text">Location</span>
      <input
        type="text"
        v-model="location"
        class="w-full bg-transparent border py-1 px-2 text"
      />
    </div>
    <button
      @click="submit"
      class="bg-gray-300 p-3 rounded-md text my-6 float-right dark:bg-gray-900"
    >
      Upload
    </button>
  </div>
</div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "upload",
  data() {
    return {
      url: null,
      file: null,
      caption: null,
      location: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    trigger() {
      this.$refs.fileInput.click();
    },
    async onFileChange(e) {
      const file = await e.target.files[0];

      this.url = URL.createObjectURL(file);
      this.file = file;
    },
    async submit() {
      let formData = new FormData();

      formData.append("postImage", this.file);
      formData.append("user", this.currentUser._id);
      formData.append("caption", this.caption);
      formData.append("location", this.location);
      try {
        await axios.post("http://localhost:3000/api/post/create", formData, {
          headers: {
            "auth-token": this.$store.state.token,
            "Content-Type": "application/json",
          },
        });
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {},
};
</script>

<style>
</style>
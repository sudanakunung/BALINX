<template>
  <div class="grid grid-cols-3 my-3 gap-2">
    <template v-if="loading === false">
      <template v-if="posts">
        <router-link
          v-for="post in posts"
          v-bind:key="post._id"
          :to="{ name: 'post', params: { postId: post._id } }"
        >
          <img
            class="h-32 rounded-md object-cover w-full"
            :src="'http://localhost:3000/' + post.image"
            alt=""
          />
        </router-link>
      </template>
    </template>
    <template v-else>
      <Miniloading />
      <Miniloading />
      <Miniloading />
      <Miniloading />
      <Miniloading />
      <Miniloading />
    </template>
  </div>
</template>

<script>
import Miniloading from "../loading/minipost";
export default {
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  components: {
    Miniloading,
  },
  props: ["userId"],

  async mounted() {
    this.loading = true;
    this.posts = await this.$store.dispatch("getPost", this.userId);
    this.loading = false;
  },
};
</script>

<style>
</style>
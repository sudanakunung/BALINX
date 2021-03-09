<template>
  <div class="h-full w-full flex flex-col">
    <template>
    <Post
      v-bind:img="'http://localhost:3000/'+post.image"
      :post="post"
      :loading="this.loading"

    />
    </template>
  </div>
</template>

<script>
import Post from "../../components/post/index";
export default {
  data() {
    return {
      post: null,
      loading:false,
      
    };
  },
  components: {
    Post,
  },
  props: ["postId"],
  methods: {
    async getPost() {
      this.loading=true;
      var post = await this.$store.dispatch("getSinglePost", this.postId);
      this.post = post;
      this.loading=false
    },
    
  },
  mounted(){
      this.getPost()
  }
};
</script>

<style>
</style>
<template>
  <div class="grid grid-cols-2">
    <div class="h-full w-full flex flex-col">
      <Post
        v-bind:img="'http://localhost:3000/' + post.image"
        :post="post"
        :loading="this.loading"
      />
    </div>
    <div class="h-full w-full pt-10 pl-5">
      <div class="flex w-full items-center space-x-3">
        <img
          :src="'http://localhost:3000/' + post.user.avatar"
          class="rounded-full border-gray-500 border-2 h-12 w-12"
          alt=""
        />
        <h3 class="font-bold text-xl text">{{ post.user.name }}</h3>
      </div>
      <div class="w-64 flex space-x-8 mt-3">
        <div class="flex flex-col justify-center">
          <svg
            class="w-7 h-7 text"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h5 class="text text-xs text-center">{{ post.like.length }}</h5>
        </div>
        <button >
          <svg
            class="w-7 h-7 text"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h5 class="text text-xs text-center">{{ post.comment.length }}</h5>
        </button>
        <div>
          <svg
            class="w-7 h-7 text"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            ></path>
          </svg>
          <h5 class="text text-xs text-center">{{ post.share.length }}</h5>
        </div>
      </div>
      <div class="h-full my-5">
        <div v-if="commentList">
          <template v-for="comment in commentList">
            <Comment
              :key="comment._id"
              :image="comment.user.avatar"
              :name="comment.user.name"
              :text="comment.comment"
              :timestamp="comment.date"
            />
          </template>
        </div>
        <div v-else>
          <div class="flex flex-col space-y-2">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../../components/post/comment";
import Loading from "../../components/loading/minipost";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Post from "../../components/post/index";
export default {
  data() {
    return {
      post: null,
      loading: false,
      commentList: null,
      
    };
  },
  components: {
    Post,
    Loading,
    Comment
  },
  props: ["postId"],
  methods: {
    async getPost() {

      var post = await this.$store.dispatch("getSinglePost", this.postId);
      this.post = post;
 
    },
    async getComment() {
      var comment = await this.$store.dispatch("getComment", this.postId);
      this.commentList = comment;
    },
    date(timestamp) {
      dayjs.extend(relativeTime);

      var result = dayjs(timestamp).fromNow("mm");
      return result;
    },
  },
  mounted() {
    this.getPost();
    this.getComment();
  },
};
</script>

<style>
</style>
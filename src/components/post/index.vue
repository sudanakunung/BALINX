<template>
  <div class="w-full h-auto px-3 md:px-5 my-5">
    <div class="relative py-5">
      <img
        :src="'http://localhost:3000/' + post.image"
        alt=""
        class="rounded-md"
      />
      <div
        class="flex flex-row mt-2 justify-between space-x-5 items-center h-14 bottom-0 z-10"
      >
        <router-link
          :to="{ name: 'profileuser', params: { userId: post.user._id } }"
          class="w-20 md:w-14"
        >
          <img
            class="w-8 h-8 rounded-full mr-2"
            :src="'http://localhost:3000/' + post.user.avatar"
            alt=""
          />
        </router-link>
        <div class="w-full flex justify-start items-center">
          <h3 class="text">{{ post.user.name }}</h3>
        </div>
        <div class="w-64 flex justify-between">
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
          <button @click="openComment">
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
      </div>
      <div
        v-show="comment"
        class="h-0 rounded-lg dark:bg-gray-900 bg-gray-300 square px-3 w-full space-y-2 flex flex-col overflow-y-auto text absolute bottom-0 pt-6"
      >
        <button @click="closeComment" class="absolute right-2 top-2">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="h-full">
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
        <div class="py-2 flex relative">
          <img
            :src="'http://localhost:3000/' + currentUser.avatar"
            class="h-8 w-8 absolute top-3 left-2 rounded-full"
            alt=""
          />
          <input
            type="text"
            class="w-full py-2 focus:outline-none focus:ring-2 ring-opacity-50 border dark:bg-gray-900 bg-gray-300 text rounded-full pl-12"
          />
          <svg
            class="h-8 w-8 absolute top-3 right-2 transform text rotate-90 rounded-full"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <p class="text-xs text">
          {{this.date(this.post.date)}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { TweenMax } from "gsap";
import { mapGetters } from "vuex";
import Comment from "./comment";
import Loading from "../loading/minipost";
export default {
  data() {
    return {
      comment: false,
      commentList: null,
    };
  },
  props: ["post", "loading"],
  components: { Comment, Loading },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    async getComment() {
      var comment = await this.$store.dispatch("getComment", this.post._id);
      this.commentList = comment;
    },
    animate() {
      TweenMax.to(".square", 0.5, {
        height: 400,
        y: -1,
      });
    },
    openComment() {
      this.comment = true;
      this.animate();
      this.getComment();
    },
    date(timestamp) {
      dayjs.extend(relativeTime);


      var result = dayjs(timestamp).fromNow();
      return result
    },
    async closeComment() {
      await TweenMax.to(".square", 0.3, {
        height: 0,
      });
      this.comment = false;
    },
  },

};
</script>
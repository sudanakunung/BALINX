<template>
  <div class="h-full w-full flex flex-row">
    <div
      ref="container"
      class="w-full h-screen overflow-y-auto flex flex-col space-x-3 scroll"
    >
      <splide :options="options" @splide:moved="moved">
        <splide-slide
          class="px-0 md:px-10 py-0 pb-10 md:py-5"
          v-for="post in posts"
          :key="post.id"
        >
          <img
            v-if="post.photo"
            class="w-full rounded-md"
            :src="post.photo"
            alt=""
          />
          <video v-if="post.video" class="w-full rounded-md" controls loop>
            <source :src="post.video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div class="w-full h-20 flex flex-row justify-between items-center">
            <div class="flex items-center">
              <img
                class="w-10 h-10 rounded-full object-cover"
                :src="post.user.avatar"
                alt=""
              />

              <h3 class="font-bold text-md text ml-5">
                {{ post.user.name }}
              </h3>
            </div>
            <div class="flex items-center space-x-2">
              <button
                v-on:click="like(post.user)"
                class="flex items-center focus:outline-none"
              >
                <svg
                  class="w-6 h-6 md:w-8 md:h-8 text"
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
                <h5 class="text text-sm">{{ post.like }}</h5>
              </button>
              <router-link
                to="/post/603f51744a647812b063b607#comment"
                class="flex items-center focus:outline-none"
              >
                <svg
                  class="w-6 h-6 md:w-8 md:h-8 text"
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
                <h5 class="text text-sm">{{ post.comment }}</h5>
              </router-link>
              <button class="flex items-center focus:outline-none">
                <svg
                  class="h-6 md:h-8 text"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                  ></path>
                </svg>
              </button>
              <h5 class="text text-sm">{{ post.share }}</h5>
            </div>
          </div>
        </splide-slide>
        <template v-slot:controls>
          <div class="splide__progress">
            <div class="splide__progress__bar"></div>
          </div>
        </template>
      </splide>
    </div>
    <div class="hidden max-h-screen lg:flex h-full w-full justify-end">
      <Chatlist />
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Chatlist from "../../components/chat/chatlist.vue";
export default {
  data() {
    return {
      options: {
        direction: "ttb",
        height: "100vh",
        autoHeight: true,
        gap: "0.5rem",
        arrows: false,
        pagination: false,
        perPage: 1,
        videoplayer: [],
      },
      posts: [
        {
          photo:
            "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          user: {
            name: "bella",
            avatar:
              "https://images.unsplash.com/photo-1560606919-9b56ed9494ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          },
          like: "1k",
          comment: "10k",
          share: "0",
        },
        {
          photo:
            "https://images.unsplash.com/photo-1505487985217-c1f95816212d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
          user: {
            name: "ariana",
            avatar:
              "https://images.unsplash.com/photo-1555620535-58093c34ea13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvJTIwcHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          },
          like: "2k",
          comment: "1k",
          share: "0",
        },
        {
          photo:
            "https://images.unsplash.com/photo-1500213721845-709b85a28da0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          user: {
            name: "yanti",
            avatar:
              "https://images.unsplash.com/photo-1570488573277-539deabd8709?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          },
          like: "2k",
          comment: "1k",
          share: "0",
        },
        {
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          user: {
            name: "yanti",
            avatar:
              "https://images.unsplash.com/photo-1570488573277-539deabd8709?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          },
          like: "2k",
          comment: "1k",
          share: "0",
        },
        {
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          user: {
            name: "yanti",
            avatar:
              "https://images.unsplash.com/photo-1570488573277-539deabd8709?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          },
          like: "2k",
          comment: "1k",
          share: "0",
        },
        {
          photo:
            "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          user: {
            name: "bella",
            avatar:
              "https://images.unsplash.com/photo-1560606919-9b56ed9494ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          },
          like: "1k",
          comment: "10k",
          share: "0",
        },
        {
          photo:
            "https://images.unsplash.com/photo-1505487985217-c1f95816212d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
          user: {
            name: "ariana",
            avatar:
              "https://images.unsplash.com/photo-1555620535-58093c34ea13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvJTIwcHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          },
          like: "2k",
          comment: "1k",
          share: "0",
        },
        {
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          user: {
            name: "yanti",
            avatar:
              "https://images.unsplash.com/photo-1570488573277-539deabd8709?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          },
          like: "2k",
          comment: "1k",
          share: "0",
        },
      ],
    };
  },
  components: {
    Chatlist,
    Splide,
    SplideSlide,
  },
  methods: {
    like(post) {
      alert(post.name);
    },
    moved() {
      if (this.videoplayer) {
        this.videoplayer.pause();
      }

      setTimeout(() => {
        var el = document.getElementsByClassName("is-active");
        var child = el[1].children[0];
        if (child.tagName === "VIDEO") {
          this.videoplayer = child;
          child.play();
        }
      }, 100);
    },
  },
  mounted() {},
};
</script>

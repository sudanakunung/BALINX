<template>
  <div class="w-auto">
    <splide :options="options" @splide:moved="moved">
      <template v-for="event in data">
        <splide-slide v-bind:key="event">
          <div
            class="h-44 w-full rounded-md bg-gray-200 dark:bg-black shadow-md dark:shadow-dark"
            
          >
          <img :src="event.photo" class="rounded-md w-full object-cover h-full" alt="">
          </div>
        </splide-slide>
      </template>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  data() {
    return {
      options: {
        padding: {
          right: "3rem",
          left: "0rem",
        },
        gap: "0.5rem",
        arrows: false,
        pagination: false,
        perPage: 2,
      },
    };
  },
  props: ["data"],
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style>
</style>
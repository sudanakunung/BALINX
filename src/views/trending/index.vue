<template>
  <div class="grid grid-cols-2">
    <masonry
      :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }"
      :gutter="{ default: '15px ', 700: '5px' }"
    >
      <div v-for="(item, index) in items" :key="index" class="mt-3">
          <img :src="item.photo" alt="" class="rounded-md">
      </div>
    </masonry>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry);
export default {
  data() {
    return {
      items: [
        {
          photo:
            "https://images.unsplash.com/photo-1616732651360-da08bee1e76c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          photo:
            "https://images.unsplash.com/photo-1616723356608-7b43e90f960e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          photo:
            "https://images.unsplash.com/photo-1616627988031-f912e383aebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=910&q=80",
        },
        {
            photo:'https://images.unsplash.com/photo-1616684245456-9b2b6eb0df4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
        },
        {
            photo:'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
            photo:'https://images.unsplash.com/photo-1616328774581-516a025a7f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        }
      ],
    };
  },
};
</script>

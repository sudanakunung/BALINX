<template>
  <div class="flex flex-row items-center justify-between">
    <div class="w-12 h-12 flex items-center justify-center">
      <img
        class="w-6 h-6 rounded-full mr-2"
        :src="'http://localhost:3000/' + image"
        alt=""
      />
    </div>
    <div class="w-full">
      <h3 class="text-md font-bold">{{name }}</h3>
      <p class="text-xs  tracking-tighter">{{text}}</p>
    </div>
    <div class="w-20">
      <p class="text-xs tracking-tighter">{{this.date(timestamp)}}</p>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
export default {
  
    props:['image','name','text','timestamp']
    ,
    methods:{
        date(timestamp) {
      dayjs.extend(relativeTime);


      var result = dayjs(timestamp).fromNow('mm');
      return result
    },
    }
};
</script>

<style>
</style>
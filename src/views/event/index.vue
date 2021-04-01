<template>
  <div class="grid grid-cols-2 ">
    <div class="pt-5 h-screen overflow-y-auto scroll">
      <div class="w-full relative flex justify-center">
        <Search @change="searching(this)" />
      </div>
      <div class="">
        <div class="mx-5 py-5">
          <h3 class="font-bold text my-2">Event Around You</h3>
          <splide :options="options" @splide:moved="moved">
            <splide-slide>
              <div class="relative">
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-20"
                >
                  <div class="w-full p-5 h-20 flex justify-between">
                    <div></div>
                    <div
                      class=" flex flex-col py-5 px-2 justify-center items-center bgdark rounded-md text "
                    >
                      <h3 class="text-xs">Marc</h3>
                      <h5>12</h5>
                    </div>
                  </div>
                  <div
                    class="h-20 mx-3 px-3 rounded-md my-4 shadow-md bg-white flex justify-end flex-col"
                  >
                    <span class="text-s text-gray-400 font-bold">music</span>
                    <h3 class="text-md text font-bold">Doyang dumang</h3>
                  </div>
                </div>
                <img
                  class="rounded-md object-cover h-64"
                  src="https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80"
                  alt="slide.alt"
                />
              </div>
            </splide-slide>
            <splide-slide>
              <div class="relative">
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-20"
                >
                  <div class="w-full p-5 h-20 flex justify-between">
                    <div></div>
                    <div
                      class=" flex flex-col py-5 px-2 justify-center items-center bgdark rounded-md text "
                    >
                      <h3 class="text-xs">Marc</h3>
                      <h5>12</h5>
                    </div>
                  </div>
                  <div
                    class="h-20 mx-3 px-3 rounded-md my-4 shadow-md bg-white flex justify-end flex-col"
                  >
                    <span class="text-s text-gray-400 font-bold">music</span>
                    <h3 class="text-md text font-bold">Doyang dumang</h3>
                  </div>
                </div>
                <img
                  class="rounded-md object-cover h-64"
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="slide.alt"
                />
              </div>
            </splide-slide>
            <splide-slide>
              <div class="relative">
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-20"
                >
                  <div class="w-full p-5 h-20 flex justify-between">
                    <div></div>
                    <div
                      class=" flex flex-col py-5 px-2 justify-center items-center bgdark rounded-md text "
                    >
                      <h3 class="text-xs">Marc</h3>
                      <h5>12</h5>
                    </div>
                  </div>
                  <div
                    class="h-20 mx-3 px-3 rounded-md my-4 shadow-md bg-white flex justify-end flex-col"
                  >
                    <span class="text-s text-gray-400 font-bold">music</span>
                    <h3 class="text-md text font-bold">Doyang dumang</h3>
                  </div>
                </div>
                <img
                  class="rounded-md object-cover h-64"
                  src="https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="slide.alt"
                />
              </div>
            </splide-slide>
          </splide>
        </div>
                <div class="mx-5 py-5">
          <h3 class="font-bold text my-2">Event In BALI</h3>
          <splide :options="options" @splide:moved="moved">
            <splide-slide>
              <div class="relative">
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-20"
                >
                  <div class="w-full p-5 h-20 flex justify-between">
                    <div></div>
                    <div
                      class=" flex flex-col py-5 px-2 justify-center items-center bgdark rounded-md text "
                    >
                      <h3 class="text-xs">Marc</h3>
                      <h5>12</h5>
                    </div>
                  </div>
                  <div
                    class="h-20 mx-3 px-3 rounded-md my-4 shadow-md bg-white flex justify-end flex-col"
                  >
                    <span class="text-s text-gray-400 font-bold">music</span>
                    <h3 class="text-md text font-bold">Doyang dumang</h3>
                  </div>
                </div>
                <img
                  class="rounded-md object-cover h-64"
                  src="https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80"
                  alt="slide.alt"
                />
              </div>
            </splide-slide>
            <splide-slide>
              <div class="relative">
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-20"
                >
                  <div class="w-full p-5 h-20 flex justify-between">
                    <div></div>
                    <div
                      class=" flex flex-col py-5 px-2 justify-center items-center bgdark rounded-md text "
                    >
                      <h3 class="text-xs">Marc</h3>
                      <h5>12</h5>
                    </div>
                  </div>
                  <div
                    class="h-20 mx-3 px-3 rounded-md my-4 shadow-md bg-white flex justify-end flex-col"
                  >
                    <span class="text-s text-gray-400 font-bold">music</span>
                    <h3 class="text-md text font-bold">Doyang dumang</h3>
                  </div>
                </div>
                <img
                  class="rounded-md object-cover h-64"
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="slide.alt"
                />
              </div>
            </splide-slide>
            <splide-slide>
              <div class="relative">
                <div
                  class="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-20"
                >
                  <div class="w-full p-5 h-20 flex justify-between">
                    <div></div>
                    <div
                      class=" flex flex-col py-5 px-2 justify-center items-center bgdark rounded-md text "
                    >
                      <h3 class="text-xs">Marc</h3>
                      <h5>12</h5>
                    </div>
                  </div>
                  <div
                    class="h-20 mx-3 px-3 rounded-md my-4 shadow-md bg-white flex justify-end flex-col"
                  >
                    <span class="text-s text-gray-400 font-bold">music</span>
                    <h3 class="text-md text font-bold">Doyang dumang</h3>
                  </div>
                </div>
                <img
                  class="rounded-md object-cover h-64"
                  src="https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="slide.alt"
                />
              </div>
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
    <div class="w-full md:px-10 h-screen relative pt-5">
      <div class="mb-3">
        <DatePicker
          is-expanded
          :value="null"
          :attributes="attributes"
          is-dark
        />
        <div class="my-3 flex flex-col space-y-2">
          <div
            v-for="event in events"
            v-bind:key="event"
            class="rounded-md bgdark flex flex-row py-2 px-2"
          >
            <div class="rounded-md bg-gray-200">
              <img class="h-16 w-20" :src="event.image" alt="" />
            </div>
            <div class="w-full h-full px-3 flex justify-center flex-col">
              <h3 class="text font-bold">{{ event.name }}</h3>
              <p class="text-s text-gray-500">{{ toManusiawi(event.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "../../components/input/search";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  data() {
    const events = [
      {
        name: "soundeland",
        date: "3/31/2021",
        image:
          "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80",
      },
      {
        name: "tommorowland",
        date: "4/10/2021",
        image:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
    ];
    return {
      events,
      attributes: [
        {
          key: "1",
          highlight: {
            color: "purple",
            fillMode: "light",
          },
          dates: new Date(),
          popover: {
            label: "Take Noah to basketball practice.",
          },
        },
      ],

      tabs: "browse",
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
  methods: {
    searching(data) {
      console.log(data);
    },
    async getEvent() {
      await this.$store.dispatch("getEvent");
      console.log(this.$store.state.user);
    },
    toManusiawi(timestamp) {
      dayjs.extend(relativeTime);

      var result = dayjs(timestamp).fromNow();
      return result;
    },
  },
  components: {
    Splide,
    SplideSlide,
    Search,
    DatePicker,
  },
  computed: {
    ...mapGetters(["events"]),
    computed: {},
  },
  mounted() {
    // this.getEvent();
  },
};
</script>

<style>
</style>
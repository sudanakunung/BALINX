<template>
  <div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    async getEvent() {
      await this.$store.dispatch("getEvent");
      console.log(this.$store.state.user);
    },
  },
  computed: {
    ...mapGetters(["events"]),
  },
  mounted() {
    // this.getEvent();
  },
};
</script>

<style>
</style>
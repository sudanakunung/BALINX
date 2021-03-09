<template>
  <div
    class="fixed top-0 left-0 z-50 w-screen h-screen flex items-end justify-end"
    v-show="loading === true"
  >
    <div class="text rounded-md p-5 animate-spin">
      <svg
        id="svg-spinner"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 48 48"
        class="text fill-current"
      >
        <circle cx="24" cy="4" r="4" />
        <circle cx="12.19" cy="7.86" r="3.7" />
        <circle cx="5.02" cy="17.68" r="3.4" />
        <circle cx="5.02" cy="30.32" r="3.1" />
        <circle cx="12.19" cy="40.14" r="2.8" />
        <circle cx="24" cy="44" r="2.5" />
        <circle cx="35.81" cy="40.14" r="2.2" />
        <circle cx="42.98" cy="30.32" r="1.9" />
        <circle cx="42.98" cy="17.68" r="1.6" />
        <circle cx="35.81" cy="7.86" r="1.3" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style>
</style>
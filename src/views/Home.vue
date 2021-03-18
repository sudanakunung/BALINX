<template>
  <div>
    <nav
      class="w-full h-20 text-white flex justify-between px-24 items-center fixed z-10"
    >
      <div>Balinx</div>
      <div class="flex justify-between space-x-2 w-1/2">
        <router-link to="/location">Location</router-link>
        <router-link to="/event">Event</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact Us</router-link>

        <router-link v-if="this.$store.state.user === 'undefine'" to="/login"
          >Log In</router-link
        >
        <router-link v-if="this.$store.state.user === 'undefine'" to="/register"
          >Registraion</router-link
        >
        <router-link to="profile">{{
          this.$store.state.user.name
        }}</router-link>
      </div>
    </nav>
    <div class="relative">
      <div
        class="w-full h-full absolute top-0 right-0 bg-opacity-50 bg-black flex items-center justify-start px-32"
      >
        <div class="text-white">
          <h2 class="text-6xl">Discover Your</h2>
          <h1 class="text-8xl">Adventure</h1>
          <button
            @click="toHome"
            class="text-white bg-green-900 p-2 mt-3 hover:scale-125 transform duration-200"
          >
            Exploar Now
          </button>
        </div>
      </div>
      <img
        src="../assets/radoslav-bali-ca3d4FYDf84-unsplash.jpg"
        class="h-screen w-full bg-cover"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {
    console.log(this.$store.state.user);
  },
  methods: {
    toHome() {
      this.$router.push("/beranda");
    },
  },
};
</script>

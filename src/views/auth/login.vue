<template>
  <div class="flex justify-center h-screen items-center w-full">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form
          class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
        >
          <p class="text-white text-center text-lg font-bold">
            LOGIN
          </p>
          <div class="">
            <label class="block text-sm text-white" for="email">E-mail</label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="email"
              id="email"
              placeholder="Email"
              aria-label="email"
              required
              v-model="form.email"
            />
          </div>
          <div class="mt-2">
            <label class="block text-sm text-white">Password</label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              id="password"
              placeholder="Password"
              arial-label="password"
              required
              v-model="form.password"
            />
          </div>

          <div class="mt-4 items-center flex justify-between">
            <router-link
              class="inline-block right-0 align-baseline font-bold text-xs text-500 text-white hover:text-red-400"
              to="/register"
              >Register</router-link
            >
            <button
              @click="onSubmit()"
              class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              type="button"
            >
              Login
            </button>
         
          </div>
          <div class="text-center">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("auth", this.form);
      console.log(this.$store.state.user)
      
    },
  },
  mounted() {
    if (this.$store.state.token != "null") {
      this.$router.replace("profile");
    }
  },
};
</script>

<style>
</style>
<template>
  <div class="flex justify-center h-screen items-center w-full">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form
          class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
        >
          <p class="text-white text-center text-lg font-bold">LOGIN</p>
          <div class="">
            <label class="block text-sm text-white" for="email">Name</label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text"
              id="name"
              placeholder="Name"
              aria-label="name"
              required
              v-model="form.name"
            />
          </div>
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
          <div class="mt-2">
            <label class="block text-sm text-white">Confirm Password</label>
            <input
              class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              id="password"
              placeholder="Confirm Password"
              arial-label="Confirm password"
              required
              v-model="form.confirm_password"
            />
          </div>

          <div class="mt-4 items-center flex justify-between">
            <router-link
              class="inline-block right-0 align-baseline font-bold text-xs text-500 text-gray-300 hover:text-white"
              to="login"
              >Have an account?</router-link
            >
            <button
              @click="onSubmit()"
              class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              type="button"
            >
              Register
            </button>
          </div>
          <div class="text-center"></div>
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
        name:"",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("register", this.form);
    },
  },
  mounted() {
    if (this.$store.state.token) {
      this.$router.replace("profile");
    }
  },
};
</script>

<style>
</style>
<template>
  <div class="flex justify-center h-screen bg-center items-center w-full" style="background-image:url('https://images.unsplash.com/photo-1523819088009-c3ecf1e34000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')">
    <div class="w-1/2">
      
    </div>
    <div class="w-1/2 flex items-center justify-center">
      <div class="leading-loose">
        <form v-on:submit.prevent="onSubmit"
          class="max-w-lg m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
>
          <p class="text-white text-center text-lg font-bold">
            LOGIN
          </p>
          <div class="">
            <label class="block text-sm text-white" for="email">E-mail</label>
            <input
              class="w-full px-5 py-1 text-white  bg-transparent border-b-2 rounded focus:outline-none "
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
              class="w-full px-5 py-1 text-white  bg-transparent border-b-2 rounded focus:outline-none "
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
              class="inline-block right-0 align-baseline font-bold text-xs text-500 text hover:text-red-400"
              to="/register"
              >Register</router-link
            >
            <button
              
              class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              type="submit"
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
<template>
  <div class="grid grid-cols-2">
    <div class="px-5">
      <h3 class="text font-bold text-xl my-5">Notification</h3>
      <div class="flex flex-col space-y-3">
        <div class="bgdark w-full h-auto rounded-md p-5">
          <div class="flex items-center justify-between space-x-5">
            <div class="flex items-center space-x-5">
              <img
                class="w-10 h-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1560606919-9b56ed9494ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
              />
              <h5 class="text font-bold">Bella</h5>
            </div>
            <p class="text-gray-500 text-sm">13:20</p>
          </div>
          <div class="flex space-x-2 items-center h-10">
            <svg
              class="w-6 h-6 md:w-5 text-red-500 md:h-5 text"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="text-gray-400">Like your Post</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
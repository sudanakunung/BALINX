<template>

          <div class=" h-16 flex lg:hidden w-full justify-around fixed bottom-0 z-50">
              <router-link class="flex flex-col  justify-center items-center hover:scale-110 hover:shadow-md duration-200 hover:text-white  hover:bg-gray-900 bg-opacity-50 rounded-full  py-1 text" style="backdrop:blue(2rem)" to="/">
              <svg class="mr-2 w-6 h-6 icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              <p class="text-xs">Beranda</p></router-link>
              <router-link class=" flex flex-col justify-center items-center  hover:scale-110 hover:shadow-md duration-200 hover:text-white  hover:bg-gray-900 bg-opacity-50 rounded-full  py-1 text" style="backdrop:blue(2rem)" to="/trending">
              <svg class="mr-2 w-6 h-6 icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
              <p class="text-xs">Trending</p></router-link>
              <router-link class=" flex flex-col justify-center items-center  hover:scale-110 hover:shadow-md duration-200 hover:text-white  hover:bg-gray-900 bg-opacity-50 rounded-full  py-1 text" style="backdrop:blue(2rem)" to="/place">
              <svg class="mr-2 w-6 h-6 icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
              <p class="text-xs">Location</p></router-link>
              <router-link class=" flex flex-col justify-center items-center  hover:scale-110 hover:shadow-md duration-200 hover:text-white  hover:bg-gray-900 bg-opacity-50 rounded-full  py-1 text" style="backdrop:blue(2rem)" to="/event">
              <svg class="mr-2 w-6 h-6 icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <p class="text-xs">Event</p></router-link>
              </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
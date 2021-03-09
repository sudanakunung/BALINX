<template>
     <div class="hidden md:flex h-screen justify-between">
              <div class="w-72 h-screen  flex flex-col space-y-2 px-5">
                    <div v-if="this.$store.state.user"  class="border-b-2 border-gray-500 px-3 flex items-center justify-between py-5">
                    <router-link class="flex px-3 text" to="/profile">
                   <img class="w-8 h-8 rounded-full mr-2" src="https://scontent.fdps5-1.fna.fbcdn.net/v/t1.0-9/37921553_1447009505400641_8037753745087397888_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGtQb39GDHyatLPv2WwXJ7mVYo_Q_kCH55Vij9D-QIfnnCT6Fm91wF6uBz_L9QPrKiLJzAxlQ9qRaEa3L5EvcOt&_nc_ohc=ByijnzjSpmMAX_0lnnV&_nc_ht=scontent.fdps5-1.fna&oh=cafea5b87c15c4360e986c1e6fea3a88&oe=60468E5A" alt="">
                    {{currentUser.name}}</router-link>
                    <div class="relative flex items-center">
                      <button class="focus:outline-none" @click="dropdownprofile=!dropdownprofile">
                      <svg v-show="dropdownprofile" class="w-10 h-8 text ease-in duration-150 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                      <svg v-show="!dropdownprofile" class="w-10 h-8 text ease-in duration-150 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div v-show="dropdownprofile" class="absolute  h-20 bottom-0 right-0 -mb-20 bg-white dark:bg-gray-600 rounded-md flex flex-col space-y-2 py-2">
                        <button class="text px-2 whitespace-nowrap">Setting</button>
                        <button @click="logout()" class="text px-2 whitespace-nowrap">Log out</button>
                    </div>
                    </div>
                </div>
              <div v-else class="border-b-2 border-gray-500 px-3 h-16 flex items-center justify-between">
                  
                    <router-link class="flex px-3 text" to="/login">Login</router-link>
                    <div class="relative flex items-center">
                    <button class="focus:outline-none" @click="dropdownprofile=!dropdownprofile">
                      <svg v-show="dropdownprofile" class="w-10 h-8 text ease-in duration-150 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                      <svg v-show="!dropdownprofile" class="w-10 h-8 text ease-in duration-150 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div v-show="dropdownprofile" class="absolute  h-20 bottom-0 right-0 -mb-20 bg-white dark:bg-gray-600 rounded-md flex flex-col space-y-2 py-2">
                        <button class="text px-2 whitespace-nowrap">Setting</button>
                        <button @click="logout()" class="text px-2 whitespace-nowrap">Log out</button>
                    </div>
                    </div>
                </div>
              <div class="h-64">
                notif
              </div>
              <div class="h-full w-full  flex flex-col justify-end space-y-5">
                <div class="border-b-2 border-gray-500 py-2 text">
                  Chat
                </div>
                <div class="flex flex-col space-y-3 pb-5">
                  <div class="flex flex-row justify-between items-center">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" class="h-8 w-8 rounded-full" alt="">
                    <div class="w-full flex px-3">
                      <p class="text">Bambang</p>
                    </div>
                    <span class="h-2 w-3 bg-green-500 rounded-full">
                      
                    </span>
                  </div>
                  <div class="flex flex-row justify-between items-center">
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" class="h-8 w-8 rounded-full" alt="">
                    <div class="w-full flex px-3">
                      <p class="text">Adam</p>
                    </div>
                    <span class="h-2 w-3 bg-green-500 rounded-full">

                    </span>
                  </div>
                  <div class="flex flex-row justify-between items-center">
                    <img src="https://images.unsplash.com/photo-1564164841584-391b5c7b590c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2037&q=80" class="h-8 w-8 rounded-full" alt="">
                    <div class="w-full flex px-3">
                      <p class="text">Ana</p>
                    </div>
                    <span class="h-2 w-3 bg-green-500 rounded-full">
                    </span>
                  </div>
                </div>
              </div>
          </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 data(){
        return{
      dropdownprofile:false
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
    methods:{
        logout(){
             this.$store.dispatch('logout')
        }
    },
}
</script>

<style>

</style>
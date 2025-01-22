<script setup lang="ts">
// import { ref } from 'vue';
import SearchView from "./SearchView.vue";
import profile from "../../assets/images/user/user-07.png"
import DropProfile from "./DropProfile.vue";
import { useActionStore } from "@/stores/action";

const useActionFormStore = useActionStore();

</script>

<template>

  <header class="sticky top-0 right-0 ">
    <div class="w-full px-4 py-3 shadow-xl bg-white flex flex-row justify-between items-center">
      <SearchView />
      <p>{{ useActionFormStore.isDropProfile }}</p>
      <!-- ========= Block ============ -->
      <div class="flex flex-row justify-end items-center relative">
        <div class=" rounded-full shadow-2  cursor-pointer" v-on:click="useActionFormStore.toogleProfile();">
          <img :src="profile" class="size-10 object-cover" alt="">
        </div>
        <!--  -->
        <DropProfile />
      </div>
    </div>
  </header>
</template>

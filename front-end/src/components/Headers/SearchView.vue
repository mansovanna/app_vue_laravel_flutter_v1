<script setup lang="ts">
import { IconSearch } from '@/model/icons';
import { ref, watch } from 'vue';

const searchValue = ref('');
const isShowBtn = ref(false);

watch(searchValue, (newValue) => {
  if (newValue.length > 3) {
    isShowBtn.value = true;
  } else {
    isShowBtn.value = false;
  }
});


const clearTextField = () => {
  searchValue.value = " ";
}
</script>


<template>
  <div class="relative flex flex-row items-center min-w-72">
    <div class="w-full">
      <input type="text" v-model="searchValue"
        class="w-full px-4 py-2 pr-24 peer bg-white border rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        placeholder="Search" />
    </div>

    <!-- Button clear text -->
    <div v-if="isShowBtn" v-on:click="clearTextField"
      class="size-8 absolute top-1 p-1 right-14 flex flex-row justify-center items-center bg-red-400 active:bg-blue-50 cursor-pointer rounded-full ">
      <IconSearch class="size-7 " />
    </div>
    <!-- Button Search -->
    <button
      class="absolute right-[2px] top-[2px] bottom-[2px] bg-primary rounded-r-[5px] text-white px-3 flex flex-row justify-center items-center peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-opacity-50">
      <IconSearch class="size-7" />
    </button>
  </div>
</template>

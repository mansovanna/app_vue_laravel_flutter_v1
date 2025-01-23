<script setup lang="ts">
import { useActionStore } from '@/stores/action';
import { reactive, ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { IconUser, IconSetting, IconLogout } from '@/model/icons';

const useActionStoreDrop = useActionStore();

const dropProfile = ref();

onClickOutside(dropProfile, () => {
  if (useActionStoreDrop.isDropProfile) {
    useActionStoreDrop.toggleProfile();
  }
});

const dropdownClass = computed(() => ({
  'h-0': !useActionStoreDrop.isDropProfile,
  'h-60 shadow-9 border': useActionStoreDrop.isDropProfile,
}));

const listMenu = reactive([
  { id: 1, icon: IconUser, title: 'Profile', path: '/' },
  { id: 2, icon: IconSetting, title: 'Account Settings', path: '/setting' },
  { id: 3, icon: IconLogout, title: 'Log Out', path: '/' },
]);
</script>

<template>
  <div :class="[dropdownClass, 'min-w-64 overflow-hidden bg-white rounded-sm absolute top-12 ease-in-out duration-500']"
    class=" border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" ref="dropProfile">
    <!-- Profile -->
    <div class="flex flex-row items-center p-4">
      <div class="w-16 h-16 rounded-full bg-gray-200">
        <img src="../../assets/images/user/user-07.png" class="w-16 h-16 rounded-full object-cover" alt="User" />
      </div>
      <div class="ml-4">
        <p class="text-sm font-semibold">John Doe</p>
        <p class="text-xs text-gray-400">jonh@gmail.com</p>
      </div>
    </div>
    <hr />
    <!-- Menu -->
    <ul class="flex flex-col px-4 py-2 font-medium text-gray-500 ">
      <li v-for="item in listMenu" :key="item.id"
        class="w-full p-2 hover:bg-gray-100 hover:text-primary dark:hover:bg-boxdark-2 rounded-md flex flex-row gap-2 items-center active:translate-y-1 transition ease-out duration-200">
        <router-link :to="item.path" class="flex flex-row items-center gap-2">
          <component :is="item.icon" class="w-5 h-5" />
          <p>{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

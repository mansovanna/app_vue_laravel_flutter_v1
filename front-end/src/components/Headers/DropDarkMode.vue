<script setup lang="ts">
import { IconComputer, IconMoon, IconSun } from '@/model/icons';
import { onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'

import { DarkMode, useActionStore } from '@/stores/action';

const useActionFormStore = useActionStore();

const target = ref(null)
const dropdownOpen = ref(false)


onClickOutside(target, () => {
  dropdownOpen.value = false
})

const showOn = () => {
  dropdownOpen.value = !dropdownOpen.value
}
const listMode = ref([
  {
    name: 'Dark Mode',
    icon: IconMoon,
    action: DarkMode.Dark
  },
  {
    name: 'Light Mode',
    icon: IconSun,
    action: DarkMode.Light
  },
  {
    name: 'System Mode',
    icon: IconComputer,
    action: DarkMode.System
  }
]);

watch(() => useActionFormStore.darkMode, (value) => {
  if (value == DarkMode.Dark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

</script>

<template>
  <div class="relative" ref="target">
    <button v-on:click="showOn()" class="rounded-full p-2 border">
      <component
        :is='useActionFormStore.darkMode == DarkMode.Dark ? IconMoon : useActionFormStore.darkMode == DarkMode.Light ? IconSun : IconComputer'
        class="size-5"></component>
    </button>

    <!-- Block menu List Action -->

    <ul v-show="dropdownOpen"
      class="w-48 absolute top-12 right-0  shadow-xl rounded-lg p-2  font-medium border border-stroke bg-white  dark:border-strokedark dark:bg-boxdark">
      <li v-for="(item, index) in listMode" :key="index">
        <button v-on:click="useActionFormStore.toggleDarkMode(item.action); dropdownOpen = false"
          class="w-full p-2 flex flex-row justify-start items-center gap-2 hover:text-primary active:translate-y-1 ease-in-out duration-200"
          :class="useActionFormStore.darkMode == item.action ? ' text-success' : ''">
          <component :is='item.icon' class="size-6" />
          <p>{{ item.name }}</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { IconNotification } from '@/model/icons'

const target = ref(null)
const dropdownOpen = ref(false)
const notifying = ref(true)

onClickOutside(target, () => {
  dropdownOpen.value = false
})

const notificationItems = ref([
  {
    route: '#',
    title: 'Edit your information in a swipe',
    details:
      'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    time: '12 May, 2025'
  },
  {
    route: '#',
    title: 'It is a long established fact',
    details: 'that a reader will be distracted by the readable.',
    time: '24 Feb, 2025'
  },
  {
    route: '#',
    title: 'There are many variations',
    details: 'of passages of Lorem Ipsum available, but the majority have suffered',
    time: '04 Jan, 2025'
  },
  {
    route: '#',
    title: 'There are many variations',
    details: 'of passages of Lorem Ipsum available, but the majority have suffered',
    time: '01 Dec, 2024'
  },


])
</script>

<template>
  <div class="relative" ref="target">
    <router-link
      class="relative flex  items-center justify-center rounded-full border-[0.5px] border-stroke  hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white p-1 bg-slate-50 active:translate-y-1"
      to="#" @click.prevent="(dropdownOpen = !dropdownOpen), (notifying = false)">
      <span :class="!notifying && 'hidden'" class="absolute top-0 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
        <span class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
      </span>

      <component :is='IconNotification' class="size-7"></component>
    </router-link>

    <!-- Dropdown Start -->
    <div v-show="dropdownOpen"
      class="absolute -right-27 mt-2 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80">
      <div class="px-4 py-3">
        <h5 class="text-sm font-medium text-bodydark2">Notification</h5>
      </div>

      <ul class="flex  h-auto max-h-[calc(100vh-40vh)] flex-col overflow-y-auto">
        <template v-for="(item, index) in notificationItems" :key="index">
          <li>
            <router-link
              class="flex flex-col gap-2 border-t border-stroke px-4 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              :to="item.route">
              <p class="text-sm">
                <span class="text-black dark:text-white">{{ item.title }}</span>
                {{ item.details }}
              </p>

              <p class="text-xs">{{ item.time }}</p>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
    <!-- Dropdown End -->
  </div>
</template>

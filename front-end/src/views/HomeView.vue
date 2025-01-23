<script setup lang="ts">
import MainLayouts from '@/components/layouts/MainLayouts.vue';
import { IconFolder, IconUserRequest, IconUserMultiple, IconUserBlock, IconAdd } from '@/model/icons';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const courses = ref([
  "https://media.geeksforgeeks.org/wp-content/uploads/20230522133830/Best-Programming-Courses.webp",
  "https://vinsys.com/static/media/uploads/2022/01/Java-Programming-Training-For-Beginners.jpg",
  "https://blog.pwskills.com/wp-content/uploads/2024/02/10-Online-Computer-Programming-Courses-to-Enroll-in-2024-01.jpg"
]);
const router = useRouter();
</script>

<template>
  <MainLayouts>
    <div class="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      <div class="w-full grid grid-cols-4 gap-4">
        <!-- 1 -->
        <div class="flex flex-row justify-start items-center gap-2 bg-white dark:bg-boxdark shadow-lg p-4 rounded-lg">
          <div class="rounded-full p-2  bg-primary bg-opacity-[0.7] text-white">
            <component :is='IconUserMultiple' class="size-10"></component>
          </div>

          <div class=" font-bold">
            <h1>User All</h1>
            <p class=" text-primary text-xl">200</p>
          </div>
        </div>

        <!-- 2 -->
        <div class="flex flex-row justify-start items-center gap-2 bg-white dark:bg-boxdark  shadow-lg p-4 rounded-lg">
          <div class="rounded-full p-2  bg-success bg-opacity-[0.7] text-white">
            <component :is='IconUserRequest' class="size-10"></component>
          </div>

          <div class=" font-bold">
            <h1>Request Course</h1>
            <p class="  text-success text-xl">200</p>
          </div>
        </div>

        <!-- 3 -->
        <div class="flex flex-row justify-start items-center gap-2 bg-white dark:bg-boxdark shadow-lg p-4 rounded-lg">
          <div class="rounded-full p-2  bg-warning bg-opacity-[0.7] text-white">
            <component :is='IconFolder' class="size-10"></component>
          </div>

          <div class=" font-bold">
            <h1>Course</h1>
            <p class=" text-warning text-xl">20</p>
          </div>
        </div>

        <!-- 4 -->
        <div class="flex flex-row justify-start items-center gap-2 bg-white dark:bg-boxdark shadow-lg p-4 rounded-lg">
          <div class="rounded-full p-2  bg-red-500 bg-opacity-[0.7] text-white">
            <component :is='IconUserBlock' class="size-10"></component>
          </div>

          <div class=" font-bold">
            <h1>Block</h1>
            <p class=" text-red-500 text-xl">20</p>
          </div>
        </div>
      </div>

      <!-- Block Section 2 -->

      <div class="w-full flex flex-row justify-between items-center gap-4 p-4">
        <h1 class=" font-semibold">Course All</h1>
        <button v-on:click="router.push('/course/add')"
          class="bg-primary flex flex-row justify-center items-center gap-2 p-2 rounded-sm hover:bg-blue-700 text-white active:translate-y-1 group">
          <component :is='IconAdd' class="size-6 group-active:-translate-x-2 duration-200 ease-in-out"></component>
          <span>Course</span>
        </button>
      </div>

      <!-- Block Course -->
      <div class="w-full grid grid-cols-3 gap-4 ">
        <div v-for="(course, index) in courses" :key="index"
          class="w-full bg-white dark:bg-boxdark shadow-md overflow-hidden rounded-lg active:translate-y-1 duration-200 ease-in-out group">
          <router-link :to="{ name: 'course.view', params: { id: index } }">
            <div class=" relative">
              <img :src="course" class="w-full min-h-52 flex-none" alt="">

              <div
                class=" absolute top-0 left-0 w-full min-h-52 bg-black  group-hover:bg-opacity-[0.4] bg-opacity-0 ease-in-out duration-200">
              </div>
            </div>

            <!-- Information -->
            <div class="w-full grow px-2">
              <h1 class=" font-semibold p-2">Course Name</h1>
              <p class=" px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>

            <!-- Button -->
            <div class="flex-none w-full text-xs font-bold">
              <div class="w-full flex flex-row justify-between items-center p-2">
                <div class="flex flex-row gap-2 items-center">
                  <div class="rounded-full p-1  bg-primary text-white">
                    <component :is='IconFolder' class="size-5"></component>
                  </div>
                  <span>10 Chapter</span>
                </div>

                <!--  -->
                <div>
                  <component :is='IconUserBlock' class="size-5 text-red-500"></component>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </MainLayouts>
</template>

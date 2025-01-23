<script setup lang="ts">
import MainLayouts from '@/components/layouts/MainLayouts.vue';
import { useRouter } from 'vue-router';


const route = useRouter();



</script>

<template>
  <MainLayouts>
    <div class="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      <div class="w-full flex justify-between items-center gap-4">
        <h1 class="text-xl font-semibold">Add Course</h1>

        <button v-on:click="route.back()" class="bg-primary p-2 text-white rounded-md">
          Back
        </button>
      </div>

      <!-- Block Form -->

      <form class="w-full flex flex-col gap-4 mt-4">
        <div class="w-full flex flex-row gap-4">
          <div class="w-full flex flex-col gap-4">
            <div class="flex items-center justify-center w-full">
              <label for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                      upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div class="w-full flex flex-col gap-4">
            <!--  -->
            <div>

              <input type="text" id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title" required />
            </div>
            <!--  -->

            <!--  -->
            <div>
              <div
                class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">

                <div class="px-4 py-2 bg-white rounded-lg dark:bg-gray-800">
                  <label for="editor" class="sr-only">Publish post</label>
                  <textarea id="editor" rows="9"
                    class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write an article..." required></textarea>
                </div>
              </div>

            </div>
            <!--  -->
          </div>
        </div>

        <!-- ================= Button =============== -->
        <div class="w-full flex flex-row justify-end items-center gap-4">
          <button class="bg-primary p-2 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  </MainLayouts>
</template>

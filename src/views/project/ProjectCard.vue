<template>
  <div class="w-full">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li class="flex text-left justify-between items-center py-4">
        <div>
          <h5 class="text-lg font-bold text-gray-900 dark:text-white">
            {{ title }}
          </h5>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ description }}
          </p>
        </div>
        <div class="flex gap-2">
          <router-link
            :key="$route.params.projectId"
            :to="{ name: 'ProjectDetails', params: { projectId: projectId } }"
          >
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Details
            </button>
          </router-link>
                  <router-link
          :to="{ name: 'ProjectEdit', params: { projectId: projectId } }"
        >
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Edit
            </button>
          </router-link>
        </div>
      </li>
      <!-- Repeat for other projects -->
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["title", "description", "projectId"]);
</script>

<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ title }}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ description }}
    </p>
    <!-- INFO: CTO  -->

    <div class="flex flex-wrap">
      <div>
        <router-link
          :key="$route.params.projectId"
          :to="{ name: 'ProjectDetails', params: { projectId: projectId } }"
        >
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Details
          </button>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: 'ProjectEdit', params: { projectId: projectId } }"
        >
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Edit
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["title", "description", "taskList", "projectId"]);
</script>

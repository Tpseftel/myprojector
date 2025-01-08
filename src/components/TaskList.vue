<template>
  <ul class="space-y-4 pt-6 text-left text-gray-500 dark:text-gray-400">
    <li
      class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer border-b-2 pb-4"
      @click="toggleisDone"
    >
      <svg
        :class="[
          isDone
            ? 'text-gray-500 dark:text-gray-400'
            : 'text-green-500 dark:text-green-400',
          'flex-shrink-0 w-3.5 h-3.5 font-bold ',
        ]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      <span :class="[isDone ? 'line-through font-light' : 'font-semibold']"
        >Individual configuration</span
      >
    </li>
    <li
      class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer border-b-2 pb-4"
    >
      <svg
        class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      <span>No setup, or hidden fees</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const isDone = ref(true);

const toggleisDone = () => { isDone.value = !isDone.value }
</script>

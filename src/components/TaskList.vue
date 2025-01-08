<template>
  <ul class="space-y-4 pt-6 text-left text-gray-500 dark:text-gray-400">
    <li
      v-for="task in sortedTasks"
      :key="task.id"
      class="flex w-full items-center space-x-3 rtl:space-x-reverse cursor-pointer border-b-2 pb-4"
      @click="toggleisDone(task)"
    >
      <svg
        :class="[
          task.isDone
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
      <span
        :class="[task.isDone ? 'line-through font-light' : 'font-semibold']"
        >{{ task.title }}</span
      >
      <button 
      @click="removeTask(task.id)"
      type="button" class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" style="margin-left:auto">Remove</button>

    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref, computed, defineProps } from "vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const props = defineProps(["projectId"]);
const projectTasks = ref([]);

onMounted(async () => {
  await taskStore.init();
  projectTasks.value = taskStore.getTasksByProjectId(props.projectId);
});

/**
 * Move done tasks at the bottom
 */
const sortedTasks = computed(() => {
  return projectTasks.value.slice().sort((a, b) => {
    if (a.isDone === b.isDone) {
      return 0;
    }
    return a.isDone ? 1 : -1; // Move `isDone: true` to the end
  });
});

const toggleisDone = (task) => {
  console.log("toggel");
  
  task.isDone ? taskStore.setTaskUndone(task.id) : taskStore.setTaskDone(task.id);
};
const removeTask = (taskId) => {
  taskStore.removeTask(taskId);
  projectTasks.value =  projectTasks.value.filter((task) => task.id != taskId);
};
</script>

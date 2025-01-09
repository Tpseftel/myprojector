<template>
  <div class="flex space-x-4 pt-4 items-center">
    <div class="relative z-0 w-1/2 mb-5 group">
      <input
        type="text"
        name="task_name"
        id="task_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="newTask"
        @keyup="errorTask = ''"
      />
      <label
        for="task_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >New Task</label
      >
    </div>
    <div>
      <button
        @click="addTask"
        type="button"
        class="px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add
      </button>
    </div>
  </div>
  <p v-if="errorTask" class="text-red-500 text-sm  pl-3">{{ errorTask }}</p>
  <ul class="space-y-4 pt-6 text-left text-gray-500 dark:text-gray-400">
    <li
      v-for="task in sortedTasks"
      :key="task.id"
      class="flex w-full items-center space-x-3 rtl:space-x-reverse cursor-pointer border-b-2 pb-4"
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
        @click="toggleIsDone(task)"
        >{{ task.title }}</span
      >
      <button
        @click="removeTask(task.id)"
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        style="margin-left: auto"
      >
        Remove
      </button>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref, computed, defineProps } from "vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
const props = defineProps(["projectId"]);
const projectTasks = ref([]);
const newTask = ref("");
const errorTask = ref('');

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

const toggleIsDone = (task) => {
  console.log("toggel");

  task.isDone
    ? taskStore.setTaskUndone(task.id)
    : taskStore.setTaskDone(task.id);
};
const addTask = async () => {
  errorTask.value = '';
  if (!newTask.value) {
    errorTask.value = 'Title is required'; 
    return;
  }
    
  await taskStore.addTask({
    id: Math.floor(Math.random() * 10000) + "",
    projectId: props.projectId,
    title: newTask.value,
    isDone: false,
  });
  newTask.value = "";
  projectTasks.value = taskStore.getTasksByProjectId(props.projectId);
};
const removeTask = async (taskId) => {
  console.log("Remove Task");

  await taskStore.removeTask(taskId);
  projectTasks.value = taskStore.getTasksByProjectId(props.projectId);
};
</script>

<template>
  <h2 class="text-4xl font-extrabold text-left py-4 dark:text-white">
    Overview
  </h2>

<!-- INFO: Card Start -->
  <div
    class="text-left p-6 bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-[500px] mr-auto"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{currentProject.name}}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ currentProject.description }}
    </p>

    <!-- Task List -->
    <TaskList :projectId="projectId">  </TaskList>

  </div>
  <!-- INFO: Card End -->
</template>

<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { useProjectStore } from "@/stores/project";
import TaskList  from "@/components/TaskList.vue";

const projectStore = useProjectStore();
const props = defineProps(["projectId"]);
const currentProject = reactive({});

onMounted(() => {
  let project = projectStore.getProjectById(props.projectId);
  if (project) {
    Object.assign(currentProject, project);
  }
});
</script>

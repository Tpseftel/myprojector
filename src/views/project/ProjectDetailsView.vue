<template>
    <h2 class="text-4xl font-extrabold text-left py-4 dark:text-white">Overview</h2>
    {{currentProject.name}}
</template>

<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { useProjectStore } from "@/stores/project";

const projectStore = useProjectStore();
const props = defineProps(['projectId'])
const currentProject = reactive({});

onMounted(() => { 
let project = projectStore.getProjectById(props.projectId);
  if (project) {
    Object.assign(currentProject, project);
  }
});
</script>
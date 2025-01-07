<template>
  <h1>Projects</h1>
  <div class="flex justify-start space-x-4">
    <ProjectCard v-for="project in project.getAllProjects" :key="project.id" :title="project.name" :description="project.description"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectCard from '@/views/project/ProjectCard.vue'
import { useProjectStore } from '@/stores/project'

const project = useProjectStore();

onMounted(async() => {
   await project.init();
})
</script>

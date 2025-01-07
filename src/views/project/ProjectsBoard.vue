<template>
  <h1>Projects</h1>
  <div class="flex justify-start space-x-4">
    <ProjectCard :title="'Hello'" :description="'This is my description'"/>
    <ProjectCard :title="'Hello'" :description="'This is my description '"/>
  </div>
</template>


<script setup>
import ProjectCard from '@/views/project/ProjectCard.vue'
</script>
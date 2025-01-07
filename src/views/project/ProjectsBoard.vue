<template>
  <h2 class="text-4xl font-bold dark:text-white">Projects</h2>

  <div class="flex p-4">
    <button
      type="button"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      @click="addProject"
    >
      Add project
    </button>
  </div>
  <div class="flex justify-start space-x-4">
    <ProjectCard
      v-for="project in project.getAllProjects"
      :key="project.id"
      :title="project.name"
      :description="project.description"
    />
  </div>
  
</template>

<script setup>
import { onMounted } from "vue";
import ProjectCard from "@/views/project/ProjectCard.vue";
import { useProjectStore } from "@/stores/project";

const project = useProjectStore();
const addProject = () => {
  project.addProject({
    id: 3,
    name: "Bike Dynamically Added",
    description: "This is a project to organize the tasks about my bike setup",
    taskList: [
      {
        title: "Fix flat tire",
        description: "The rear tire is flat, I need to fix it",
        status: "todo",
      },
      {
        title: "Fix Brakes",
        description: "Back brake's disk needs fixing",
        status: "todo",
      },
      {
        title: "Put oil in the chain",
        description: "Add oil in the chain",
        status: "todo",
      },
    ],
  });
};

onMounted(async () => {
  await project.init();
});
</script>

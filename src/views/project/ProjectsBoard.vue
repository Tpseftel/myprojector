<template>
  <h2 class="text-4xl font-bold dark:text-white">Projects</h2>

  <div class="flex p-4">
    <button
      data-modal-target="default-modal"
      data-modal-toggle="default-modal"
      type="button"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      @click="openModal"
    >
      Add project
    </button>
  </div>
  <div class="flex flex-wrap">
    <div class=" flex flex-wrap w-full sm:w-1/2 gap-4">
      <div v-for="project in project.getAllProjects" class="w-full sm:w-1/3"  :key="project.id">
        <ProjectCard
          :title="project.name"
          :description="project.description"
          :projectId="project.id"
        />
      
      </div>
    </div>
    <div class="w-full sm:w-1/2">
    <router-view/>
    </div>
  </div>

  <!-- INFO: Modal Start -->
  <ProjectModal :isOpen="isModalOpen" @closeModal="handleCloseModal" />
  <!-- INFO: Modal End -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProjectCard from "@/views/project/ProjectCard.vue";
import ProjectModal from "@/views/project/ProjectModal.vue";
import { useProjectStore } from "@/stores/project";

const project = useProjectStore();

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const handleCloseModal = () => {
  isModalOpen.value = false;
};

onMounted(async () => {
  await project.init();
});
</script>

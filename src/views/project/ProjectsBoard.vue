<template>
  <div class="flex  p-2">
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
  <div class="flex flex-wrap p-3 ">

    <div class=" flex flex-wrap max-h-[576px]  overflow-y-hidden hover:overflow-y-auto  justify-center md:justify-start w-full md:w-1/2 gap-2">
      <div v-for="project in project.getAllProjects" class=" w-full lg:w-3/4"  :key="project.id">
        <ProjectCard
          :title="project.name"
          :description="project.description"
          :projectId="project.id"
        />
      
      </div>
    </div>
    <div class="w-full  md:w-1/2">
    <!-- INFO: use :key to rerender the view when the url parameter changes -->
    <router-view  :key="$route.params.projectId" />
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

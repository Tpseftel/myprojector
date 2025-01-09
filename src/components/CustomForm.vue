<template>
  <form
    @submit.prevent="handleSubmit"
    class="md:p-5 text-left p-7 mx-10 shadow-xl"
  >
    <div class="grid gap-4 mb-4 grid-cols-2 text-left">
      <div class="col-span-1">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Title</label
        >
        <input
          v-model="currentProject.name"
          type="text"
          name="name"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Type product name"
          required=""
        />
      </div>

      <div class="col-span-2">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Description</label
        >
        <textarea
          v-model="currentProject.description"
          id="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write product description here"
        ></textarea>
      </div>
    </div>
    <!-- INFO: Task List Start-->
    <TaskList :projectId="projectId" />
    <!-- INFO: Task List End-->
    <div class="flex gap-4 flex-wrap submit--button py-5">
      <button
        data-modal-hide="default-modal"
        @click="editProject(props.projectId)"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit Project
      </button>
      <button
        data-modal-hide="default-modal"
        @click="router.back()"
        type="submit"
        class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, defineProps, onMounted } from "vue";
import { useProjectStore } from "@/stores/project";
import TaskList from '@/components/TaskList.vue'
import router from "@/router";

const props = defineProps(["projectId"]);
const projectStore = useProjectStore();

const currentProject = reactive({});
const newTask = ref("");

onMounted(() => {
  let project = projectStore.getProjectById(props.projectId);
  if (project) {
    Object.assign(currentProject, project);
  }
});

const handleSubmit = () => {
  console.log("Handle Submit");
};

const editProject = (projectId) => {
  projectStore.updateProject(projectId, currentProject);
  // Refresh Form
  currentProject.name = "";
  currentProject.description = "";
  newTask.value = "";

  router.push("/projects");
};
</script>

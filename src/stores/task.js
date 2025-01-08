import { defineStore } from "pinia";

const api = {
  endpoint: "http://localhost:3000/tasks",
  headers: {
    "Content-Type": "application/json",
  },
};

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTaskById: (state) => (taskId) => {
        return state.tasks.find((task) => task.id === taskId);
    },
    getTasksByProjectId: (state) => (projectId) => {
        return state.tasks.filter((task) => task.projectId === projectId);
    },
  }, 
  actions: {
    async init() {
      try {
        let response = await fetch(api.endpoint);
        if (!response.ok) {
          throw new Error("Error Occured");
        }
        this.tasks = await response.json();
      } catch (err) {
        console.log(err);
      }
    },
  },
});

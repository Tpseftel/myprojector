import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
      projects: []
  }),
  getters: {
    getAllProjects: (state) => {
      return state.projects;
    },
  },
  actions: {
    async init() {
      try {
        let response = await fetch("http://localhost:3000/projects");
        if (!response.ok) {
          throw new Error("Error Occured");
        }
        this.projects = await response.json();
      } catch (err) {
        console.log(err);
      }
    },
  },
});

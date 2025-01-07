import { defineStore } from "pinia";
const endpoint = "http://localhost:3000/projects";
export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [],
  }),
  getters: {
    getAllProjects: (state) => {
      return state.projects;
    },
    getProjectById: (state) => (id) =>  {
        return  state.projects.find((project) => project.id === id)
    }
  },
  actions: {
    async init() {
      try {
        let response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Error Occured");
        }
        this.projects = await response.json();
      } catch (err) {
        console.log(err);
      }
    },
    async addProject(project) {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      if (!resp.ok) {
        throw new Error("Cannot add the new project");
      }
      const newProject = await resp.json();
      this.projects.push(newProject);
    },
  },
});

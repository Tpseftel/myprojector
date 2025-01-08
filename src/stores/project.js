import { defineStore } from "pinia";
const api = {
  endpoint: "http://localhost:3000/projects",
  headers : {
    "Content-Type": "application/json",
  }
}
export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [],
  }),
  getters: {
    getAllProjects: (state) => {
      return state.projects;
    },
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
  },
  actions: {
    async init() {
      try {
        let response = await fetch(api.endpoint);
        if (!response.ok) {
          throw new Error("Error Occured");
        }
        this.projects = await response.json();
      } catch (err) {
        console.log(err);
      }
    },
    async addProject(project) {
      const resp = await fetch(api.endpoint, {
        method: "POST",
        headers: api.headers,
        body: JSON.stringify(project),
      });
      if (!resp.ok) {
        throw new Error("Cannot add the new project");
      }
      const newProject = await resp.json();
      this.projects.push(newProject);
    },
    async updateProject(projectId, projectData) {
      const resp = await fetch(api.endpoint + "/" + projectId, {
        method: "Put",
        headers: api.headers,
        body: JSON.stringify(projectData)
      });
      if (!resp.ok) {
        throw new Error(`Error: ${resp.status} ${resp.statusText}`);
      }
      const updatedProject = await resp.json();
      
      // Update local projects
      const index = this.projects.findIndex(project => project.id === projectId);
      if (index !== -1) {
        this.projects[index] = updatedProject;
      }
      console.log("Project updated successfully:", updatedProject);
    },
  },
});

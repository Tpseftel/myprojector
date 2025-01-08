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
    async removeTask(taskId) {
      try {
        let response = await fetch(`${api.endpoint}/${taskId}`, {
          method: "DELETE",
          headers: api.headers,
        });
        if (!response.ok) {
          throw new Error("Error Occured");
        }
        this.tasks = this.tasks.filter((task) => task.id != taskId);
      } catch (err) {
        console.log(err);
      }
    },
    async setTaskDone(taskId) {
        try {
            let response = await fetch(`${api.endpoint}/${taskId}`, {
                method: "PATCH",
                headers: api.headers,
                body: JSON.stringify({ isDone: true }),
            });
            if (!response.ok) {
                throw new Error("Error Occured");
            }
             await response.json();
            let taskIndex = this.tasks.findIndex((task) => task.id === taskId);
            if (taskIndex !== -1) {
                this.tasks[taskIndex].isDone = true;
            }
        } catch (err) {
            console.log(err);
        }
    },
    async setTaskUndone(taskId) {
        try {
            let response = await fetch(`${api.endpoint}/${taskId}`, {
                method: "PATCH",
                headers: api.headers,
                body: JSON.stringify({ isDone: false }),
            });
            if (!response.ok) {
                throw new Error("Error Occured");
            }
            await response.json();
            let taskIndex = this.tasks.findIndex((task) => task.id === taskId);
            if (taskIndex !== -1) {
                this.tasks[taskIndex].isDone = false;
            }
        } catch (err) {
            console.log(err);
        }
    }

  },
});

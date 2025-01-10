import { defineStore } from "pinia";

const api = {
  endpoint: "http://localhost:3000/user/1",
};

export const useUserStore = defineStore("userStore", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    isAdmin: (state) => {
      return state.authUser ? state.authUser.isAdmin : false
    },
  },
  actions: {
    async loginUser() {
      // INFO: Fake login
      try {
        const response = await fetch(api.endpoint)
        if (!response.ok) {
          throw new Error("Login failed");
        }
        this.authUser = await response.json();
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
    logoutUser () {
      this.authUser = null;
    }
  },
});

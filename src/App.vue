<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />
    <MainNavBar />
    <router-view />
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainNavBar from "@/components/MainNavBar.vue";

import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
const userStore = useUserStore();

onMounted(async () => {
  await userStore.loginUser();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

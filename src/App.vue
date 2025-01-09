<template>
  <div :class="[isDark ? 'dark' : '', 'flex flex-col min-h-screen']"   >
    <MainHeader />
    <MainNavBar @toggleTheme="handleTheme" />
    <router-view />
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainNavBar from "@/components/MainNavBar.vue";

import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const isDark = ref(false);

onMounted(async () => {
  await userStore.loginUser();
});

const handleTheme = (off) => {
  isDark.value = off;
};
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

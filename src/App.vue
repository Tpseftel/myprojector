<template>
<div :class="isDark ? 'dark' : ''">
  <div class="flex flex-col min-h-screen dark:bg-slate-800"   >
    <MainHeader />
    <MainNavBar @toggleTheme="handleTheme" />
    <router-view />
    <MainFooter />
  </div>
</div>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainNavBar from "@/components/MainNavBar.vue";

import { ref } from "vue";
const isDark = ref(false);

const handleTheme = (dark) => {
  isDark.value = dark;
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

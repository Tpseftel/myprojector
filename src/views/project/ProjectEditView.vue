<template>
  <h2 class="text-4xl font-extrabold text-left py-4 dark:text-white">Edit</h2>
  <CustomForm :projectId="projectId" :action="'edit'"/>
</template>

<script setup>
import { defineProps } from "vue";
import CustomForm from '@/components/CustomForm.vue'
defineProps(["projectId"]);
</script>

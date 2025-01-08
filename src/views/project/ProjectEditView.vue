<template>
  <h1>Edit View</h1>
  ProjectId: {{ projectId }}
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["projectId"]);
</script>

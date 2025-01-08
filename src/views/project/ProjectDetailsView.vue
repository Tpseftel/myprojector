<template>
    <h1>Project Details Page </h1>
    <h2>ID: {{ projectId }}</h2>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(['projectId'])
</script>
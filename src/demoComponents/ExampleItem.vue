<template>
  <div class="container" :style="{ backgroundColor: color }">
    <h3 class="title">{{ title }}</h3>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const { title, text, color } = defineProps<{ title: string; text: string; color: string }>()
</script>

<style scoped>
.container {
  padding: 5px;
  color: black;
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
}
.title {
  margin: 0;
}
</style>

<template>
  <div class="join"></div>
  <PathArrow />
</template>

<script setup lang="ts">
import PathArrow from './PathArrow.vue'
</script>

<style scoped>
.join {
  border-top: var(--path-width) var(--path-color) solid;
  position: absolute;
  width: calc(100% - var(--arrow-size));
  top: calc(50% - var(--path-width) / 2);
}
.left .join {
  right: 0;
}
</style>

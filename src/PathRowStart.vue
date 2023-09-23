<template>
  <div class="row-start"></div>
  <PathArrow />
</template>

<script setup lang="ts">
import PathArrow from './PathArrow.vue'
</script>

<style scoped>
.row-start {
  border-bottom: var(--path-width) var(--path-color) solid;
  border-right: var(--path-width) var(--path-color) solid;
  border-radius: 0 0 calc(var(--path-width) * 3) 0;
  position: absolute;
  width: calc(100% - var(--arrow-size));
  bottom: calc(50% - var(--path-width) / 2);
  top: 0;
  right: 0;
}
.right .row-start {
  border-left: var(--path-width) var(--path-color) solid;
  border-right: 0;
  border-radius: 0 0 0 calc(var(--path-width) * 3);
  left: 0;
}
</style>

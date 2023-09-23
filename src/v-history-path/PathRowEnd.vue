<template>
  <div class="row-end"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.row-end {
  border-top: var(--path-width) var(--path-color) solid;
  border-right: var(--path-width) var(--path-color) solid;
  border-radius: 0 calc(var(--path-width) * 3) 0 0;
  position: absolute;
  width: 100%;
  top: calc(50% - var(--path-width) / 2);
  bottom: 0;
  right: 0;
}

.left .row-end {
  border-left: var(--path-width) var(--path-color) solid;
  border-right: 0;
  border-radius: calc(var(--path-width) * 3) 0 0 0;
}
</style>

<template>
  <div class="arrow"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-top: var(--arrow-size) solid transparent;
  border-bottom: var(--arrow-size) solid transparent;
  border-right: var(--arrow-size) solid var(--path-color);
  border-left: none;
  position: absolute;
  left: 0;
  bottom: calc(50% - var(--arrow-size));
}
.right .arrow {
  border-left: var(--arrow-size) solid var(--path-color);
  border-right: none;
  right: 0;
  left: auto;
}
</style>

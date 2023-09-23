<template>
  <div v-if="type === 'item'" :class="`item ${dir ? dir : ''}`">
    <slot :item="payload" />
  </div>
  <!-- Path -->
  <div v-else :class="`path ${dir ? dir : ''}`">
    <PathStart v-if="type === 'start'" />
    <PathEnd v-else-if="type === 'end'" />
    <PathJoin v-if="type === 'join'" />
    <PathRowStart v-if="type === 'row-start'" />
    <PathRowEnd v-if="type === 'row-end'" />
  </div>
</template>

<script setup lang="ts">
import PathStart from './PathStart.vue'
import PathEnd from './PathEnd.vue'
import PathJoin from './PathJoin.vue'
import PathRowStart from './PathRowStart.vue'
import PathRowEnd from './PathRowEnd.vue'

const { type, payload, dir } = defineProps<{ type: string; dir?: string; payload?: any }>()
</script>

<style scoped>
.item {
  margin-top: calc(var(--item-gap) / 2);
  height: var(--item-height);
  width: var(--item-width);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.path {
  width: var(--item-gap);
  height: calc(var(--item-height) + var(--item-gap));
  position: relative;
}

.right {
  float: left;
}
.left {
  float: right;
}
</style>

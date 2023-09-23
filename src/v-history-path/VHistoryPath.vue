<template>
  <div class="v-history-path" ref="root" :style="vars">
    <div class="node-container">
      <template v-for="({ type, dir, payload }, ni) in nodes" :key="ni">
        <!-- Item -->
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
      <!-- Float Clear -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Node = {
  type: string
  payload?: any
  dir?: string
}

import { computed, ref, type Ref, onMounted, onUnmounted } from 'vue'
import PathStart from './PathStart.vue'
import PathEnd from './PathEnd.vue'
import PathJoin from './PathJoin.vue'
import PathRowStart from './PathRowStart.vue'
import PathRowEnd from './PathRowEnd.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  itemHeight: {
    type: Number,
    default: 100
  },
  itemWidth: {
    type: Number,
    default: 200
  },
  itemGap: {
    type: Number,
    default: 20
  },
  pathColor: {
    type: String,
    default: 'grey'
  },
  pathWidth: {
    type: Number,
    default: 20
  }
})

const itemsPerRow = computed(
  () => Math.floor((rootWidth.value - 3 * props.itemGap) / (props.itemGap + props.itemWidth)) || 1
)
const rows = computed(() => Math.ceil(props.items.length / itemsPerRow.value))

const nodes = computed(() => {
  const _nodes: Node[] = []
  // Early return
  if (rows.value < 1) return []
  // Iterate rows (r: row, d:dir, j:total items)
  for (let r = 0, d = 'right', j = 0; r < rows.value; r++, d = d === 'right' ? 'left' : 'right') {
    // Start each row with a row-start
    _nodes.push({ type: `row-start`, dir: d })
    // For each itemPerRow, add the item, and an join; do not exceed the total number of items
    for (let i = 0; i < itemsPerRow.value && j < props.items.length; i++, j++) {
      _nodes.push({ type: 'item', payload: props.items[r * itemsPerRow.value + i], dir: d })
      _nodes.push({ type: `join`, dir: d })
    }
    // Re-assign the last row node to row-end
    _nodes[_nodes.length - 1] = { type: `row-end`, dir: d }
  }
  // Re-assign the first node to start
  _nodes[0].type = 'start'
  // Re-assign the last node to end
  _nodes[_nodes.length - 1].type = 'end'
  return _nodes
})

const root: Ref<Element | null> = ref(null)
const rootWidth = ref(0)

const resetWidth = () => (rootWidth.value = root?.value?.clientWidth || 0)

const vars = computed(() =>
  [
    `--item-height: ${props.itemHeight}px`,
    `--item-width: ${props.itemWidth}px`,
    `--item-gap: ${props.itemGap}px`,
    `--path-width: ${props.pathWidth}px`,
    `--path-color: ${props.pathColor}`,
    `--arrow-size: ${props.pathWidth * 2}px`,
    `--row-width: ${props.itemGap + itemsPerRow.value * (props.itemGap + props.itemWidth)}px`
  ].join(';')
)

onMounted(() => {
  globalThis.addEventListener('resize', () => resetWidth())
  resetWidth()
})
onUnmounted(() => {
  globalThis.removeEventListener('resize', () => resetWidth())
})
</script>

<style scoped>
.v-history-path,
.v-history-path * {
  box-sizing: border-box;
}
.v-history-path {
  height: 100%;
  width: 100%;
}
.node-container {
  margin: var(--item-gap) auto;
  width: var(--row-width);
}
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
.clear {
  clear: both;
}
</style>

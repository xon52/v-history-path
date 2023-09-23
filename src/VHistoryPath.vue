<template>
  <div class="v-history-path" ref="root" :style="vars">
    <div class="node-container">
      <template v-for="({ type, dir, payload }, ni) in nodes" :key="ni">
        <NodeItem :type="type" :dir="dir" :payload="payload" v-slot="{ item }">
          <slot :item="item" />
        </NodeItem>
      </template>
      <!-- Float Clear -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NodeItem from './NodeItem.vue'
import { computed, ref, type Ref, onMounted, onUnmounted } from 'vue'
import { getItemsPerRow, getNodes } from './helpers'

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

const root: Ref<Element | null> = ref(null)
const rootWidth = ref(0)

const itemsPerRow = computed(() => getItemsPerRow(rootWidth.value, props.itemGap, props.itemWidth))
const nodes = computed(() => getNodes(props.items, itemsPerRow.value))

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

// Get and maintain available width
const resetWidth = () => (rootWidth.value = root?.value?.clientWidth || 0)
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
.clear {
  clear: both;
}
</style>

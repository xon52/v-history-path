<template>
  <main>
    <h1 class="main-title">v-history-path</h1>
    <VHistoryPath
      :items="items"
      :item-height="+itemHeight"
      :item-width="+itemWidth"
      :item-gap="+itemGap"
      :path-width="+pathWidth"
      :path-color="pathColor"
      v-slot="{ item }"
    >
      <ExampleItem :title="item.title" :text="item.text" :color="item.color" />
    </VHistoryPath>

    <DemoControls />
  </main>
</template>

<script setup lang="ts">
import ExampleItem from './components/ExampleItem.vue'
// import VHistoryPath from 'v-history-path'
import VHistoryPath from '../src'
import DemoControls from './components/DemoControls.vue'
import { itemGap, itemHeight, itemWidth, pathWidth, pathColor } from './store'
import items from './items'
</script>

<style>
body {
  background-color: #222;
  color: whitesmoke;
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
}

.main-title {
  text-align: center;
}
</style>

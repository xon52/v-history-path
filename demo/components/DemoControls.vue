<template>
  <div class="controls">
    <div class="props">
      <h3>Props</h3>
      <label>
        <span>itemHeight ({{ itemHeight }}px):</span>
        <input type="range" min="50" max="500" step="10" v-model="itemHeight" />
      </label>
      <label>
        <span>itemWidth ({{ itemWidth }}px):</span>
        <input type="range" min="50" max="500" step="10" v-model="itemWidth" />
      </label>
      <label>
        <span>itemGap ({{ itemGap }}px):</span>
        <input type="range" min="5" max="200" step="5" v-model="itemGap" />
      </label>
      <label>
        <span>pathWidth ({{ pathWidth }}px):</span>
        <input type="range" min="1" max="50" step="1" v-model="pathWidth" />
      </label>
      <label>
        <span>pathColor:</span>
        <input type="text" v-model="pathColor" />
      </label>
    </div>
    <div class="code">
      <h3>Code used</h3>
      <pre>{{
`<VHistoryPath
  :items="items"
  :item-height="${itemHeight}"
  :item-width="${itemWidth}"
  :item-gap="${itemGap}"
  :path-width="${pathWidth}"
  :path-color="${pathColor}"
  v-slot="{ item }"
>
  <CustomComponent :iterated-item="item" />
</VHistoryPath>`
}}
        </pre>
    </div>
    <div class="component">
      <h3>CustomComponent</h3>
      <ExampleItem title="Title" text="Text text text" color="lightgreen" style="height: 100px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { itemGap, itemHeight, itemWidth, pathWidth, pathColor } from '../store'
import ExampleItem from './ExampleItem.vue'
</script>

<style>
.controls {
  position: fixed;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(37, 37, 37, 0.911);
  border-radius: 20px;
  display: flex;
  margin: 0.5rem;
}
.props label {
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 300px;
}
.props input {
  margin-left: 0.5rem;
  width: 150px;
}
.code,
.component {
  padding-left: 1rem;
  margin-left: 1rem;
  border-left: 1px grey solid;
}
</style>

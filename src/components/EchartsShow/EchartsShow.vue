<script setup>
import config from './config.js'
import { useChartStore } from '@/stores/chart.js'

const chartStore = useChartStore()

</script>

<template>
  <div class="chart">
    <div class="description">
      <h2>{{ chartStore.currentShowChartInfo.title }}</h2>
      <h3>{{ chartStore.currentShowChartInfo.subtitle }}</h3>
      <p>{{ chartStore.currentShowChartInfo.description }}</p>
    </div>
    <div class="container">
      <div class="chart-container">
        <div v-for="chartType in config" class="chart-type" :key="chartType.title">
          <component v-for="kind in chartType.kinds" class="chart-type__kind" :id="kind.id" :is="kind.component"
                     :key="kind.title">
          </component>
        </div>
      </div>
      <div class="control">
        <button @click="chartStore.scrollTo('top')">上</button>
        <div>
          <button style="margin-right: 4px" @click="chartStore.scrollTo('left')">左</button>
          <button @click="chartStore.scrollTo('right')">右</button>
        </div>
        <button @click="chartStore.scrollTo('bottom')">下</button>
      </div>
    </div>
  </div>
</template>

<style>
 .chart {
   display: grid;
   grid-template-columns: 1fr 1fr;
 }
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: start;
}

.control {
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  gap: 4px;
}

.control button {
  padding-inline: 10px;
  padding-block: 8px;
}

.chart-container {
  --width: 600px;
  --height: 400px;
  width: var(--width);
  height: var(--height);
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  overscroll-behavior-y: contain;
  scroll-behavior: smooth;
  display: flex;
}

.chart-type {
  flex-shrink: 0;
  width: var(--width);
  height: var(--height);
  scroll-snap-align: start;

  overflow-x: hidden;
  overflow-y: auto;

  scroll-snap-type: y mandatory;
  overscroll-behavior-y: contain;
  scroll-behavior: smooth;
}

.chart-type__kind {
  width: var(--width);
  height: var(--height);
  scroll-snap-align: start;
}
</style>
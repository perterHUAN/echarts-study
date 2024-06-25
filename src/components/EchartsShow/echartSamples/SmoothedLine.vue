<script setup>
import {ref} from "vue";
import {initialChart} from "@/utils";
const chartRef = ref();
const option = {
  xAxis: {
    data: ["A", "B", "C", "D"]
  },
  yAxis: {},
  series: [
    {
      type: "line",
      data: [6, 11, 6, 13],
      smooth: true
    },
    {
      type: "line",
      data: [9, 11, 7, 5],
      smooth: true
    }
  ]
}
initialChart(chartRef, option);
</script>
<template>
  <div ref="chartRef"></div>
</template>
<style></style>

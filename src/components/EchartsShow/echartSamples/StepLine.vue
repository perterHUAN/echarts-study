<script setup>
import {ref} from "vue";
import {initialChart} from "@/utils";
const chartRef = ref();
const option = {
  xAxis: {
    data: ["A", "B", "C", "D"]
  },
  yAxis: {},
  legend: {
    data: ["step-start", "step-middle", "step-end"]
  }
  ,
  series: [
    {
      type: "line",
      name: "step-start",
      step: "start",
      data: [1, 2, 3, 4],
      smooth: true
    },
    {
      type: "line",
      name: "step-middle",
      step: "middle",
      data: [3, 4, 5, 6],
      smooth: true
    },
    {
      type: "line",
      name: "step-end",
      step: "end",
      data: [5, 6, 7, 8],
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

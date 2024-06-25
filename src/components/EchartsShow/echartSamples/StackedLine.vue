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
        data: [10, 11, 12, 13],
        stack: "x",
        areaStyle: {}
      },
      {
        type: "line",
        data: [2, 3, 4, 5],
        stack: "x",
        areaStyle: {}
      }
    ]
  }
  initialChart(chartRef, option);
</script>
<template>
  <div ref="chartRef"></div>
</template>
<style></style>
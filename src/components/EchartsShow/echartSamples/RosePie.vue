<script setup>
import {ref} from "vue";
import {initialChart} from "@/utils";
const chartRef = ref();
const option = {
  legend:{
    orient: "vertical",
    x: "left",
    data: ["A", "B", "C"]
  },
  avoidLabelOverlap: false,
  series: [
    {
      type: "pie",
      data: [
        {
          value: 50,
          name: "A"
        },
        {
          value: 30,
          name: "B",
        },
        {
          value: 20,
          name: "C"
        }
      ],
      roseType: 'area'
    }
  ]
}
initialChart(chartRef, option);
</script>
<template>
  <div ref="chartRef"></div>
</template>
<style></style>

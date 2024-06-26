<script setup>
import {ref} from "vue";
import {initialChart} from "@/utils";
const chartRef = ref();
const option = {
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
      ]
    }
  ]
}
initialChart(chartRef, option);
</script>
<template>
  <div ref="chartRef"></div>
</template>
<style></style>

<script setup>
import {ref} from "vue";
import {initialChart} from "@/utils";
const chartRef = ref();
const option = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: "scatter",
      data: [220, 182, 191, 234, 290, 330, 310],
      symbol: "arrow",
      symbolSize: function(value){ return value/10; },
      label: {
        show: true,
        position: "top"
      }
    }
  ]
}
initialChart(chartRef, option);
</script>
<template>
  <div ref="chartRef"></div>
</template>
<style></style>

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
      radius: ['50%', '70%'],
      label: {
        show: false,
        position: "center"
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'Bold'
        }
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

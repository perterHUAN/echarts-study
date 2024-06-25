<script setup>
  import {ref} from "vue";
  import {initialChart} from "@/utils"
  const chartRef = ref();
  const option = {
    xAxis: {
      type: "category",
      data: ["A", "B", "C"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        type: "line",
        data: [200, 300, 400],
        symbolSize: 10,
        lineStyle:{
          color: 'green',
          width: 4,
          type: 'dashed'
        },
        itemStyle: {
          borderType: "dashed"
        }
        ,
        label: {
          show: true,
          position: "top",
          textStyle: {
            fontSize: '20px'
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
<style>

</style>
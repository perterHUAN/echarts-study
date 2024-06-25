<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref()
onMounted(() => {
  const myChart = echarts.init(chartRef.value)
  const option = {
    legend: {
      data: ['tom', 'peter']
    },
    tooltip: {},
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [
      {
        name: 'tom',
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25],
        stack: "x"
      }, {
        name: 'peter',
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20, 27],
        stack: "x"
      }
    ]
  }
  myChart.setOption(option)
})
</script>

<template>
  <div ref="chartRef">
  </div>
</template>

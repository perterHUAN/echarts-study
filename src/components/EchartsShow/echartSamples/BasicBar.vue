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
        data: [23, 24, 18, 25, 27, {
          value: 28,
          itemStyle: { color: '#91cc75', shadowColor: '#91cc75', borderType: 'dashed', opacity: .5 }
        }, 25],
        itemStyle: {
          borderRadius: 5,
          borderWidth: 1,
          borderType: 'solid',
          borderColor: '#73c0de',
          shadowColor: '#5470c6',
          shadowBlur: 3
        }
      }, {
        name: 'peter',
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20, 27]
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
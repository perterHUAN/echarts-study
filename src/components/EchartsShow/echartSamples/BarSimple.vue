<script setup>
import {onMounted, ref} from "vue";
import * as echarts from "echarts";
const chartRef = ref();
console.log("outside of onMounted, ref: ", chartRef.value);
onMounted(() => {
  console.log("echarts: ", echarts);
  console.log("inside of onMounted, ref: ", chartRef.value);
  const myChart1 = echarts.init(chartRef.value);
  const option1 = {
    title: {
      text: "Echarts 入门实例"
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  myChart1.setOption(option1);

})
</script>

<template>
  <div ref="chartRef">
  </div>
</template>
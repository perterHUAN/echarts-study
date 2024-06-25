<script setup>
import { ref } from 'vue'
import {generateWaterFallData, initialChart } from "@/utils";

const chartRef = ref()
const data =[900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
const [preSum, currPlus, currMinus] = generateWaterFallData(data);
const option = {
  xAxis: {
    type: "category",
    data: (function(){
        const list = [];
        for(let i = 1; i <= 11; ++i)
          list.push(`Oct/${i}`);
        return list;
    })(),
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type:"value"
  },
  series: [
    {
      type: "bar",
      data: preSum,
      stack: "waterfall",
      itemStyle: {
        color: 'rgba(0,0,0,0)',
      }
    },
    {
      type: "bar",
      data: currMinus,
      stack: "waterfall",
      itemStyle: {
        color: '#f33'
      }
    },
    {
      type: "bar",
      data: currPlus,
      stack: "waterfall",
    }
  ]
}

initialChart(chartRef, option);

</script>

<template>
  <div ref="chartRef">
  </div>
</template>

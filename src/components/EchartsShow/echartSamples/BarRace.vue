<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref()
const data = Array.from({length: 5}, () => Math.random() * 200);

let myChart = null;
const option = {
  yAxis: {
    type: "category",
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    max: 2,
    animationDuration: 300,
    animationDurationUpdate: 300
  },
  xAxis: {},
  series:[
    {
      realtimeSort: true,
      name: "X",
      type: "bar",
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 3000,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
}
onMounted(() => {
  myChart = echarts.init(chartRef.value)
  myChart.setOption(option);
})

function update() {
  const data = option.series[0].data;
  for(let i = 0; i < data.length; ++i) {
    data[i] += Math.round(Math.random() * (Math.random() > 0.9 ? 2000 : 200));
  }
  myChart.setOption(option);
}
function animationControl() {
  let timeId = null;
  function startAnimation() {
    clearInterval(timeId);
    timeId = setInterval(() => update(), 300);
  }
  function endAnimation() {
    clearInterval(timeId);
  }
  return {
    startAnimation,
    endAnimation
  }
}

const {startAnimation, endAnimation} = animationControl();

const animationStatus = ref("停止");
function handleClick() {
  if(animationStatus.value === '停止') {
    startAnimation();
    animationStatus.value = "运行"
  }else if(animationStatus.value === '运行'){
    endAnimation();
    animationStatus.value = "停止"
  }
}



</script>

<template>
  <div class="container">
    <div ref="chartRef" :class="$attrs.class"></div>
    <button @click="handleClick()" class="stop-animation-button">
      {{ animationStatus === '停止' ? '开始动画' : '停止动画'}}
    </button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: fit-content;
}
.stop-animation-button {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

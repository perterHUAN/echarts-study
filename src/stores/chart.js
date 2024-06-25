import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import config from "@/components/EchartsShow/config.js"

export const useChartStore = defineStore('chart', () => {
  const currentShowChart = ref("0-0");

  const currentShowChartInfo = computed(() => {
    const info = {title: "", subtitle: "", description: ""};
    const cf = config.find(item => item.kinds.some(kd => kd.id === currentShowChart.value));
    if(!cf) return info;
    info.title = cf.title;
    const kd = cf.kinds.find(item => item.id === currentShowChart.value);
    info.subtitle = kd.title;
    info.description = kd.description;
    return info;
  })

  const scrollTo = (direction) => {
    let [x, y] = currentShowChart.value.split("-").map(e => Number(e));
    if(direction === 'top')  {
      if(y !== 0) --y;
    }else if(direction === 'bottom') {
      if(y !== config[x].kinds.length - 1) ++y;
    }else if(direction === 'left') {
      if(x !== 0) --x;
    }else if(direction === 'right') {
      if(x !== config.length - 1) ++x;
    }
    const newId = `${x}-${y}`;
    document.getElementById(newId).scrollIntoView({
      behavior: "smooth"
    })
    currentShowChart.value = newId;
  }

  return {currentShowChart, scrollTo,currentShowChartInfo};
})

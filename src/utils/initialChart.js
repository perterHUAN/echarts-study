import { onMounted } from 'vue'
import * as echarts from 'echarts'

function initialChart(domRef, option) {
  onMounted(() => {
    try{
      echarts.init(domRef.value).setOption(option);
    } catch(error) {
      console.log("error:  ", error);
      console.log("dom: ", domRef.value);
    }
  })
}

export default initialChart;
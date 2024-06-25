import { BasicBar, StackedBar,BarRace,WaterFall } from '@/components/EchartsShow/echartSamples/index.js'



const config = [
  {
    title: "柱状图学习",
    kinds: [
      {
        title: "基本柱状图",
        id: "0-0",
        component: BasicBar,
        description: `
          <p>多系列柱状图。series包含多个数据，可以指明name使图例可以显示对应系列数据。</p>
          <p>通过<code>series.itemStyle</code>来设置每个bar的样式，也可以单独设置某一个bar的样式(<code>{value: 4, itemStyle: {...}}</code>)。</p>
          <p>可以设置的样式属性有哪些?</p>
          <ul>
            <li>柱条的颜色<code>color</code></li>
            <li>...</li> 
          </ul>
          `
      },
      {
        title: "堆叠柱状图",
        id: "0-1",
        component: StackedBar,
        description: `
          <p>拥有同样stack值的系列将堆叠在一组。产生一个新的值（总和）。</p>
        `
      },
      {
        title: "动态排序柱状图",
        id: "0-2",
        component: BarRace,
        description: `
          <p>不断更新series[0].data中的值并调用setOption</p>
          <p>动画根据更新前后的option来绘制</p>
        `
      },
      {
        title: "阶段瀑布图",
        id: "0-3",
        component: WaterFall,
        description: `
          <p>数组的第一个值表示初始值，后一个值是前一个值的差值</p>
          <p>如何绘制？</p>
          <p>借助于堆叠属性。堆叠以下三个属性:</p>
          <ul>
            <li>之前的总和(设置透明色)(如果当前的值是负值的话，还需要减去这个值的绝对值，另一个系列的值再堆叠上来)</li>
            <li>当前+(数据没有的话，用'-'表示。如果存在的话它会出现在总和之上。)</li>
            <li>当前-(数据没有的话，用'-'表示，用红色来表示。如果存在的话会出现在总和之下。)</li>
          </ul> 
        `
      }
    ]
  },
  {
    title: "折线图学习",
    kinds: [
      {
        title: "简单折线图",
        id: "1-0",
        component: BasicBar
      },
      {
        title: "复杂折线图",
        id: "1-1",
        component: BasicBar
      }
    ]
  }
]

export default config;
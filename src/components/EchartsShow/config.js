import { BasicBar, StackedBar } from '@/components/EchartsShow/echartSamples/index.js'



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
        title: "堆叠柱状图",
        id: "0-1",
        component: StackedBar,
        description: `
          <p>拥有同样stack值的系列将堆叠在一组。产生一个新的值（总和）。</p>
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
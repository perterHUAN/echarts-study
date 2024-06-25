import {
  BasicBar,
  StackedBar,
  BarRace,
  WaterFall,
  BasicLine,
  StackedLine
} from '@/components/EchartsShow/echartSamples'


const config = [
  {
    title: '柱状图学习',
    kinds: [
      {
        title: '基本柱状图',
        id: '0-0',
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
        title: '堆叠柱状图',
        id: '0-1',
        component: StackedBar,
        description: `
          <p>拥有同样stack值的系列将堆叠在一组。产生一个新的值（总和）。</p>
        `
      },
      {
        title: '动态排序柱状图',
        id: '0-2',
        component: BarRace,
        description: `
          <p>不断更新series[0].data中的值并调用setOption</p>
          <p>动画根据更新前后的option来绘制</p>
        `
      },
      {
        title: '阶段瀑布图',
        id: '0-3',
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
    title: '折线图学习',
    kinds: [
      {
        title: '基础折线图',
        id: '1-0',
        component: BasicLine,
        description: `
          <p>如何设置折线的样式</p>
          <p>使用<code>line-style</code>属性</p>
          <p>可以设置哪些样式?</p>
          <p><code>color,width,type(solid,dashed..)</code></p>
          <p>如何设置点的样式?</p>
          <p>使用<code>item-style</code>属性</p>
          <p>可以设置哪些样式?</p>
          <p><code>color, border-type....</code></p>
          <p>如何设置标记?</p>
          <p>使用<code>label</code>属性，<code>show</code>控制标记的显示和隐藏,<code>position</code>控制标记的位置, <code>textStyle</code>控制文字的类型</p>
        `
      },
      {
        title: '堆叠折线图',
        id: '1-1',
        component: StackedLine,
        description: `
          <p>设置<code>stack</code>属性。注意：为了区分普通的折线图和堆叠折现图，我们需要设置<code>areaStyle</code>属性</p>
        `
      }
    ]
  }
]

export default config
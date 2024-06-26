import {
  BasicBar,
  StackedBar,
  BarRace,
  WaterFall,
  BasicLine,
  StackedLine,
  AreaChart,
  SmoothedLine,
  StepLine,
  BasicPie,
  RingPie,
  RosePie,
  BasicScatter
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
      },
      {
        title: `区域平滑面积`,
        id: `1-2`,
        component: AreaChart,
        description: `
          <p>设置<code>areaStyle</code>属性</p>
        `
      },
      {
        title: `平滑曲线图`,
        id: `1-3`,
        component: SmoothedLine,
        description: `
          <p>设置<code>smooth</code>属性为<code>true</code></p>
        `
      },
      {
        title: `阶跃图`,
        id: `1-4`,
        component: StepLine,
        description: `
        <p>阶跃图使用垂直和水平的线将点连起来。阶跃图更能表示数据的突变。</p>
        <ul>
          <li><code>step: "start"</code>表示从开始阶跃</li>
          <li><code>step: "middle"</code>表示从中间阶跃</li>
          <li><code>step: "end"</code>表示从最后阶跃</li>
        </ul>
        `
      }
    ]
  },
  {
    title: '饼图学习',
    kinds: [
      {
        title: '基础饼图',
        id: '2-0',
        component: BasicPie,
        description: `
          <p>和折线图和柱状图不同,饼图不需要坐标轴,而是把数据和名称写在系列中。</p>
          <p>可以通过<code>series.radius</code>来设置，可以设置像素或百分比（此时相对于容器中短的一条边）</p>
        `
      },
      {
        title: '圆环图',
        id: '2-1',
        component: RingPie,
        description: `
          <p>设置radius: [xxx, xxx]。自动应用小的值作为内半径</p>`
      },
      {
        title: '玫瑰图',
        id: '2-2',
        component: RosePie,
        description: `
          <p>弧度相同，但是半径不同。数据值越大，半斤就越大</p>
          <p>通过设置<code>series.roseType="area"</code>来绘制玫瑰图</p>
        `
      }
    ]
  },
  {
    title: '散点图',
    kinds: [{
      title: '基础散点图',
      id: '3-0',
      component: BasicScatter,
      description: `
        <p>可以通过设置<code>symbol</code>来设置点的形状。</p>
        <p>可以通过设置<code>symbolSize</code>来设置点的形状。可以给定一个值，可以传给一个函数(function(value){}，函数的参数为数据值，这样我们就可以根据数据值给定点的大小</p>
      `
    }]
  }
]

export default config
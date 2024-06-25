import BarSimple from './echartSamples/BarSimple.vue'

const config = [
  {
    title: "柱状图学习",
    kinds: [
      {
        title: "简单柱状图",
        id: "0-0",
        component: BarSimple,
        description: "这是一个柱状图"
      },
      {
        title: "复杂柱状图",
        id: "0-1",
        component: BarSimple
      }
    ]
  },
  {
    title: "折线图学习",
    kinds: [
      {
        title: "简单折线图",
        id: "1-0",
        component: BarSimple
      },
      {
        title: "复杂折线图",
        id: "1-1",
        component: BarSimple
      }
    ]
  }
]

export default config;
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '股票学习手册',
  description: '从零基础到建立自己的观察框架',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习计划', link: '/plan/7-day' },
      { text: '股票知识', link: '/notes/intro-and-rules' }
    ],
    sidebar: [
      {
        text: '学习计划',
        items: [
          { text: '7天学习计划', link: '/plan/7-day' },
          { text: '每天60分钟安排', link: '/plan/60-minutes' },
          { text: '7天打卡表', link: '/plan/checklist' }
        ]
      },
      {
        text: '股票知识',
        items: [
          { text: '入门认知与交易机制', link: '/notes/intro-and-rules' },
          { text: '市场结构与不同交易场景', link: '/notes/market-structure' },
          { text: '估值与选股框架', link: '/notes/valuation-and-selection' },
          { text: '技术分析基础', link: '/notes/technical-basics' },
          { text: '盘中工具与短线观察', link: '/notes/intraday-tools' },
          { text: '方法论与心态', link: '/notes/methodology-and-mindset' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})

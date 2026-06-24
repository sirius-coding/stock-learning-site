import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '股票学习手册',
  description: '从零基础到建立自己的观察框架',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习计划', link: '/plan/7-day' },
      { text: '股票知识', link: '/notes/intro-and-rules' },
      { text: '技术分析', link: '/technical/' },
      { text: '散户修养', link: '/training/' }
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
      },
      {
        text: '技术分析',
        items: [
          { text: '导读', link: '/technical/' },
          { text: 'K线', link: '/technical/k-line' },
          { text: '均线', link: '/technical/moving-averages' },
          { text: '成交量', link: '/technical/volume' },
          { text: 'MACD', link: '/technical/macd' },
          { text: '布林线', link: '/technical/bollinger-bands' },
          { text: '分时', link: '/technical/intraday' },
          { text: '筹码', link: '/technical/chips' },
          { text: '盘口', link: '/technical/handicap' }
        ]
      },
      {
        text: '散户修养',
        items: [
          { text: '导读', link: '/training/' },
          { text: '序言，前言', link: '/training/00-preface' },
          { text: '第1章 有关股市的事实', link: '/training/01-facts' },
          { text: '第2章 你其实也有优势', link: '/training/02-advantages' },
          { text: '第3章 捅破投资的“窗户纸”', link: '/training/03-window-paper' },
          { text: '第4章 像胜出者一样思考', link: '/training/04-think-like-winners' },
          { text: '第5章 认知偏差与决策链', link: '/training/05-bias-and-decisions' },
          { text: '第6章 揭开价值的面纱', link: '/training/06-value' },
          { text: '第7章 让视角回归本质', link: '/training/07-essence' },
          { text: '第8章 高价值企业的奥秘', link: '/training/08-great-businesses' },
          { text: '第9章 经营观测与守候', link: '/training/09-observation' },
          { text: '第10章 从雪球到雪崩', link: '/training/10-snowball' },
          { text: '第11章 对象、时机、力度', link: '/training/11-object-timing-size' },
          { text: '第12章 市场定价的逻辑', link: '/training/12-market-pricing' },
          { text: '第13章 预期与回报', link: '/training/13-expectation-return' },
          { text: '第14章 永远的周期轮回', link: '/training/14-cycles' },
          { text: '第15章 估值的困与惑', link: '/training/15-valuation' },
          { text: '第16章 客观理性看A股', link: '/training/16-a-share' },
          { text: '总结篇 好生意，好企业，好投资', link: '/training/17-summary' }
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

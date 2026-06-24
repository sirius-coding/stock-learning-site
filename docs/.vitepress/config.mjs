import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '股票学习手册',
  description: '从零基础到建立自己的观察框架',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '阅读地图', link: '/roadmap/' },
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
          { text: '入门认知与交易机制总览', link: '/notes/intro-and-rules' },
          { text: '入门认知与交易机制基础版', link: '/notes/intro-and-rules-basic' },
          { text: '入门认知与交易机制进阶版', link: '/notes/intro-and-rules-advanced' },
          { text: '市场结构与不同交易场景总览', link: '/notes/market-structure' },
          { text: '市场结构与不同交易场景基础版', link: '/notes/market-structure-basic' },
          { text: '市场结构与不同交易场景进阶版', link: '/notes/market-structure-advanced' },
          { text: '估值与选股框架总览', link: '/notes/valuation-and-selection' },
          { text: '估值与选股框架基础版', link: '/notes/valuation-and-selection-basic' },
          { text: '估值与选股框架进阶版', link: '/notes/valuation-and-selection-advanced' },
          { text: '技术分析基础总览', link: '/notes/technical-basics' },
          { text: '技术分析基础版', link: '/notes/technical-basics-basic' },
          { text: '技术分析进阶版', link: '/notes/technical-basics-advanced' },
          { text: '盘中工具与短线观察总览', link: '/notes/intraday-tools' },
          { text: '盘中工具与短线观察基础版', link: '/notes/intraday-tools-basic' },
          { text: '盘中工具与短线观察进阶版', link: '/notes/intraday-tools-advanced' },
          { text: '方法论与心态总览', link: '/notes/methodology-and-mindset' },
          { text: '方法论与心态基础版', link: '/notes/methodology-and-mindset-basic' },
          { text: '方法论与心态进阶版', link: '/notes/methodology-and-mindset-advanced' }
        ]
      },
      {
        text: '技术分析',
        items: [
          { text: '导读', link: '/technical/' },
          { text: 'K线总览', link: '/technical/k-line' },
          { text: 'K线基础版', link: '/technical/k-line-basic' },
          { text: 'K线进阶版', link: '/technical/k-line-advanced' },
          { text: '均线总览', link: '/technical/moving-averages' },
          { text: '均线基础版', link: '/technical/moving-averages-basic' },
          { text: '均线进阶版', link: '/technical/moving-averages-advanced' },
          { text: '成交量总览', link: '/technical/volume' },
          { text: '成交量基础版', link: '/technical/volume-basic' },
          { text: '成交量进阶版', link: '/technical/volume-advanced' },
          { text: 'MACD总览', link: '/technical/macd' },
          { text: 'MACD基础版', link: '/technical/macd-basic' },
          { text: 'MACD进阶版', link: '/technical/macd-advanced' },
          { text: '布林线总览', link: '/technical/bollinger-bands' },
          { text: '布林线基础版', link: '/technical/bollinger-bands-basic' },
          { text: '布林线进阶版', link: '/technical/bollinger-bands-advanced' },
          { text: '分时总览', link: '/technical/intraday' },
          { text: '分时基础版', link: '/technical/intraday-basic' },
          { text: '分时进阶版', link: '/technical/intraday-advanced' },
          { text: '筹码总览', link: '/technical/chips' },
          { text: '筹码基础版', link: '/technical/chips-basic' },
          { text: '筹码进阶版', link: '/technical/chips-advanced' },
          { text: '盘口总览', link: '/technical/handicap' },
          { text: '盘口基础版', link: '/technical/handicap-basic' },
          { text: '盘口进阶版', link: '/technical/handicap-advanced' }
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

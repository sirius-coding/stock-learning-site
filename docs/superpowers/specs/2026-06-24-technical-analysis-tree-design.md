# Technical Analysis Tree Design

**Goal:** Add a dedicated technical-analysis section to the stock learning site, organized by indicator/topic with a consistent internal structure of concept, signals, usage, and risks.

## Structure

- 技术分析
  - 导读
  - K线
  - 均线
  - 成交量
  - MACD
  - 布林线
  - 分时
  - 筹码
  - 盘口

## Page Model

Each topic uses one Markdown page with four internal sections:

- 概念
- 信号
- 用法
- 风险

This keeps sidebar size manageable while preserving a stable reading model.

## Content Sources

- K线: `know_k_graph`, `know_20_k_graph`, `up_k_graph`, `down_k_graph`
- 均线: `know_moving_average`, `common_used_moving_average`, `know_buy_by_moving_average`, `know_sale_by_moving_average`, `know_five_moving_average_usage`, `moving_average_meaning`, `know_mvoing_average_choice`, `average_line/*`
- 成交量: `k_and_volume`
- MACD: `what_is_macd`, `macd_top_divergence`, `macd_down_divergence`
- 布林线: `know_bolling_bands`, `boll_*`
- 分时: `time_line_chart_skill`, `time_chart_decide_the_buying_and_selling`, `time_chart_buy_skill`, `5_15_30_60`
- 筹码: `tech_analysis_chip_distibution`, `tech_analysis_chip_choice`
- 盘口: `handicap_indicator`

## Success Criteria

- the section appears in nav and sidebar
- each topic page follows the same internal structure
- build succeeds
- the section complements, rather than replaces, the existing note pages

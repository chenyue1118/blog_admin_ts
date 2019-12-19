<template lang="html">
  <div
    :class="className"
    :style="{height: height, width: width}"
  ></div>
</template>

<script lang="ts">
import echarts, { EChartOption } from 'echarts'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { dateDay } from '@/utils/moment'

export interface ILineChartData {
  articleTrend: number[]
  questionTrend: number[]
  commentTrend: number[]
  trafficTrend: number[]
}

@Component({
  name: 'LineChart'
})
export default class extends Vue {
  @Prop({required: true}) private chartData!: ILineChartData
  @Prop({default: 'chart'}) private className!: string
  @Prop({default: '100%'}) private width!: string
  @Prop({default: '350px'}) private height!: string

  private chart: any = null

  @Watch('chartData', { deep: true })
  private onChartDataChange(value: ILineChartData) {
    console.log(value)
    this.setOptions(value)
  }

  mounted() {
    // TODO: this.$nextTick()
    this.initChart()
  }

  beforeDestroy() {
    if (!this.chart) return
    this.chart.dispose()
    this.chart = null
  }

  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, 'macarons')
    this.setOptions(this.chartData)
  }

  private setOptions(chartData: ILineChartData) {
    if (this.chart) {
      const xData = dateDay(7)
      this.chart.setOption({
        xAxis: {
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: xData,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: 8
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['文章数', '问答数']
        },
        series: [{
          name: '文章数',
          itemStyle: {
            color: '#FF005A',
            lineStyle: {
              color: '#FF005A',
              width: 2
            }
          },
          smooth: true,
          type: 'line',
          data: chartData.articleTrend,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '问答数',
          smooth: true,
          type: 'line',
          itemStyle: {
            color: '#3888fa',
            lineStyle: {
              color: '#3888fa',
              width: 2
            },
            areaStyle: {
              color: '#f3f8ff'
            }
          },
          data: chartData.questionTrend,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      } as EChartOption<EChartOption.SeriesLine>)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

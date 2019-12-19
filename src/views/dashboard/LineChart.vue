<template lang="html">
  <div
    :class="className"
    :style="{height: height, width: width}"
  ></div>
</template>

<script lang="ts">
import echarts from 'echarts'
import { Component, Vue, Prop } from 'vue-property-decorator'

export interface ILineChartData {
  expectedData: number[]
  actualData: number[]
}

@Component({
  name: 'LineChart'
})
export default class extends Vue {
  @Prop({required: true}) private chartData!: ILineChartData
  @Prop({default: 'chart'}) private className!: string
  @Prop({default: '100%'}) private width!: string
  @Prop({default: '350px'}) private height!: string
}
</script>

<style lang="scss" scoped>
</style>

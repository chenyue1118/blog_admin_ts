<template lang="html">
  <div class="count-to-wrapper">
    <span class="count-to-count-text" :id="counterId">
      {{ init }}
    </span>
  </div>
</template>

<script lang="ts">
import CountUp from 'countup'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'CountTo'
})

export default class extends Vue {
    @Prop({default: 0}) private init!: number

    /**
     * @description 起始值，即动画开始前显示的数值
     */
    @Prop({default: 0}) private startVal!: number

    /**
     * @description 结束值，即动画结束后显示的数值
     */
    @Prop({default: 0}) private end!: number

    /**
     * @description 保留几位小数
     */
    @Prop({default: 0}) private decimals!: number

    /**
     * @description 分隔整数和小数的符号，默认是小数点
     */
    @Prop({default: '.'}) private decimal!: string

    /**
     * @description 动画持续的时间，单位是秒
     */
    @Prop({default: 2}) private duration!: number

    /**
     * @description 动画延迟开始的时间，单位是秒
     */
    @Prop({default: 0}) private delay!: number

    /**
     * @description 是否禁用easing动画效果
     */
    @Prop({default: false}) private uneasing!: boolean

    /**
     * @description 是否使用分组，分组后每三位会用一个符号分隔
     */
    @Prop({default: false}) private useGroup!: boolean

    /**
     * @description 用于分组(usegroup)的符号
     */
    @Prop({default: ','}) private separator!: string

    /**
     * @description 是否简化显示，设为true后会使用unit单位来做相关省略
     */
    @Prop({default: false}) private simplify!: boolean

    /**
     * @description 自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略
     *              1000即显示为1K+
     */
    @Prop({default: (): any[] => [[3, 'K+'], [6, 'M+'], [9, 'B+']]}) private unit!: any[]

    @Prop({default: ''}) private unitClass!: string

    @Watch('counterId')
    onCounterIdChanged(): string {
      return `count_to_${Math.random()}`
    }

    @Watch('end')
    onEndChanged(value: number) :void {
      const endVal = this.getValue(value)
      this.counter.update(endVal)
    }

    private counterId: string = `count_to_${Math.random()}`
    private counter: any = null
    private unitText: string = ''

    getHandleVal(val: number, len: number): any {
      return {
        endVal: Math.floor(val / Math.pow(10, this.unit[len - 1][0])),
        // endVal: parseInt(val / Math.pow(10, this.unit[len - 1][0]), 0),
        unitText: this.unit[len - 1][1]
      }
    }

    transformValue (val: number): any {
      const len = this.unit.length
      let res = {
        endVal: 0,
        unitText: ''
      }
      if (val < Math.pow(10, this.unit[0][0])) res.endVal = val
      else {
        for (let i = 1; i < len; i += 1) {
          if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0]))
            res = this.getHandleVal(val, i)
        }
      }
      if (val > Math.pow(10, this.unit[len - 1][0])) res = this.getHandleVal(val, len)
      return res
    }

    getValue(val: number): number {
      let res = 0
      if (this.simplify) {
        const { endVal, unitText } = this.transformValue(val)
        this.unitText = unitText
        res = endVal
      } else {
        res = val
      }
      return res
    }

    mounted() {
      const endVal: number = this.end
      this.counter = new (CountUp as any)(
        this.counterId,
        this.startVal,
        endVal,
        this.decimals,
        this.duration,
        {
          useEasing: !this.uneasing,
          useGrouping: this.useGroup,
          separator: this.separator,
          decimal: this.decimal
        }
      )
      setTimeout(() => {
        if (!this.counter.error) this.counter.start()
      }, this.delay)
  }
}
</script>

<style lang="less" scoped>
</style>

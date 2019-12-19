<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name:{{ name }}
    </div>
    <panel-group
      :article-number="dashboardInfo.articleNumber"
      :question-number="dashboardInfo.questionNumber"
      :comment-number="dashboardInfo.commentNumber"
      :traffic-volume="dashboardInfo.trafficVolume"
    />
    <line-chart :chart-data="lineChartData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PanelGroup from './PanelGroup.vue'
import LineChart, { ILineChartData } from './LineChart.vue'
import { UserModule } from '@/store/modules/user'
import { getDashboardInfo } from '@/api/dashboard'

@Component({
  name: 'Dashboard',
  components: {
    PanelGroup,
    LineChart
  }
})
export default class extends Vue {
  // private lineChartData extends ILineChartData = {
  private lineChartData: any = {}
  private dashboardInfo: any = {}

  created() {
    getDashboardInfo().then(res => {
      this.dashboardInfo = res.data
      this.lineChartData = {
        articleTrend: this.dashboardInfo.articleTrend,
        questionTrend: this.dashboardInfo.questionTrend,
        commentTrend: this.dashboardInfo.commentTrend,
        trafficTrend: this.dashboardInfo.trafficTrend
      }
      console.log(this.lineChartData, 'this.lineChartData')
    })
  }

  // 算是计算属性
  get name() {
    return UserModule.name
  }

  // get roles() {
  //   return UserModule.roles
  // }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 20px;
}
</style>

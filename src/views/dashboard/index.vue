<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name:{{ name }}
    </div>
    <panel-group />
    <line-chart />
    <!-- <line-chart :chart-data = 'lineChartData' /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PanelGroup from './PanelGroup.vue'
import LineChart from './LineChart.vue'
// import LineChart,  { ILineChartData } from './LineChart.vue'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Dashboard',
  components: {
    PanelGroup,
    LineChart
  }
})
export default class extends Vue {
  // private lineChartData: ILineChartData{} = {
  //   expectedData: [100, 120, 161, 134, 105, 160, 165],
  //   actualData: [120, 82, 91, 154, 162, 140, 145]
  // }
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

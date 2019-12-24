<template>
  <div>
    <el-row class="box-card-wrap">
      <el-col :span="6">
        <el-card class="box-card">11</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">11</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">11</el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">11</el-card>
      </el-col>
    </el-row>

    <line-chart :chart-data="lineChartData" />
  </div>
</template>

<script>
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
import LineChart from './components/line-chart'
export default {
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card-wrap {
  margin: 0 -20px;

  .box-card {
    margin: 0 20px;
  }
}
</style>

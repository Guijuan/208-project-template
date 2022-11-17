<template>
  <div class="pieChart">
<!--    <h1>{{ msg }}</h1>-->
<!--    <p>{{ pieChartData && pieChartData[0] }}</p>-->
    <div class="pieChart-header">
      <h1>pieChart(后端获取数据若缺省则使用默认值)</h1>
      <h1>echarts绘制</h1>
    </div>
    <div class="pieChart-container" id="pieChart-container">

    </div>
  </div>
</template>

<script>
import { helpFunc, drawPieChart } from './pieChartHelp';
export default {
  name: 'PieChart',
  props: {
    msg: String,
    pieChartData: Array,
  },
  mounted() {
    // 如果需要在单个组件中发起请求，可以在mount中获取
    console.log(helpFunc());
    drawPieChart('pieChart-container');
    console.log(this.pieChartData);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pieChart{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.pieChart>.pieChart-header{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pieChart>.pieChart-container{
  flex: 4;
}
</style>
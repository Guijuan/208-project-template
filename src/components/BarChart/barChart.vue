<template>
    <div class="barChart">
        <!--    <h1>{{ msg }}</h1>-->
        <!--    <p>{{ pieChartData && pieChartData[0] }}</p>-->
        <div class="barChart-header">
            <h1>barChart(后端获取数据若缺省则使用默认值)</h1>
            <h1>d3绘制</h1>
        </div>
        <div class="barChart-container" id="barChart-container">
            <svg class="barChart-svg"></svg>
        </div>
    </div>
</template>
<script>
import { drawBarChart } from "./barChartHelp";
import * as d3 from 'd3'
export default {
  name: 'barChart',
  props: {
    barChartData: [],
  },
  mounted() {
    console.log(this.barChartData);
    let data = this.barChartData
    drawBarChart('.barChart-svg',data)
  }
}
</script>
<style scoped>
.barChart{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.barChart>.barChart-header{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.barChart>.barChart-container{
    flex: 4;
}
</style>
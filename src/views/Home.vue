<template>
  <!-- 摆放各个组件以及布局 -->
  <div class="layout">
    <div class="top">
<!--      <img alt="Vue logo" src="../assets/logo.png" />-->
<!--      <PieChart msg="PieChart" :pieChartData="pieChartData" />-->
        <ProjectHeader/>
    </div>
    <div class="middle">
<!--      <ScatterChart msg="ScatterChart" :scatterChartData="scatterChartData" />-->
      <div class="middle-left">
          <PieChart v-if='pieChartData' :pieChartData="pieChartData"></PieChart>
      </div>
      <div class="middle-middle">
          <BarChart v-if='barChartData' :barChartData="barChartData"/>
      </div>
      <div class="middle-right">

      </div>
    </div>
    <div class="bottom">
        <ProjectFooter/>
<!--      <h2>{{ count }}</h2>-->
<!--      <button @click="add">+1</button>-->
<!--      <p>{{ pieChartData && pieChartData.length }}</p>-->
<!--      <p>{{ scatterChartData && scatterChartData.length }}</p>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PieChart from '@/components/PieChart/pieChart.vue';
import ScatterChart from '@/components/ScatterChart/scatterChart.vue';
import ProjectHeader from '@/components/ProjectHeader/projectHeader.vue';
import ProjectFooter from '@/components/ProjectFooter/projectFooter.vue';
import BarChart from "@/components/BarChart/barChart";
export default {
  name: 'Home',
  components: {
    ProjectHeader,
    PieChart,
    ScatterChart,
    ProjectFooter,
    BarChart
  },
  mounted() {
    console.log(this.count);
    const id = 32311;
    this.$store.dispatch('getPieChartDataAsync');
    this.$store.dispatch('getScatterChartDataAsync');
    this.$store.dispatch('getBarChartDataAsync');
  },
  computed: {
    // 获取vuex中的数据，并且声明为组价的计算属性
    count() {
      return this.$store.state.count;
    },
    scatterChartData() {
      return this.$store.state.scatterChartData;
    },
    pieChartData() {
      return this.$store.state.pieChartData;
    },
    barChartData() {
      return this.$store.state.barChartData;
    }
  },
  methods: {
    add() {
      this.$store.commit('increment', {
        amount: 10,
      });
    },
  },
};
</script>
<style scoped>
@import './Home.css';

</style>
export default {
  increment(state, payload) {
    console.log(payload);
    // 变更状态
    state.count += payload.amount;
  },
  getPieChartData(state, payload) {
    state.pieChartData = payload;
  },
  getScatterChartData(state, payload) {
    state.scatterChartData = payload;
  },
  getBarChartData(state, payload) {
    state.barChartData = payload
  }
};

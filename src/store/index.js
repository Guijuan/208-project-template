import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
const state = {
  count: 1,
  scatterChartData: null,
  pieChartData:null,
  barChartData:null,
}
export default createStore({
  state,
  mutations,
  actions,
});

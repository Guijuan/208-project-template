import { axiosInstance } from './config';
// 获取banner
export const getBarChartDataRequest = () => {
  return axiosInstance.get('/getBarChartData');
};

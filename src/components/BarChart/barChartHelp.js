import * as d3 from 'd3'
export const drawBarChart = (container, data, {
  // 获取y轴的值
  yValue = (d) => d.value,
  // 获取x轴的值
  xValue = (d) => d.name,
  dimensions = {
    width: 600,
    height: 600,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60
    }
  },
  color = d3.scaleOrdinal(d3.schemePastel2)
}={}) => {
  // 图表宽度
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  // 图表高度
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;
  const svg = d3
    .select(container)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);
  // y轴为线性比例尺
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => yValue(d))])
    .range([dimensions.boundedHeight, 0]);

  // d3.max 取最大值，d3.min 取最小值

  // 序数比例尺 可以通过 xScale.bandwidth() 获取柱状图的宽度
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => xValue(d)))
    .range([0, dimensions.boundedWidth])
    .padding(0.2); // padding 百分比的值

  // 颜色比例尺
  const chartG = svg
    .append("g")
    .style("transform",`translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  chartG.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d) => xScale(xValue(d)))
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => dimensions.boundedHeight - yScale(yValue(d)))
    .attr("fill", (d, i) => color(i));
  // d3 提供了 axisBottom axisLeft 来绘制坐标轴
  const xAxis = d3.axisBottom(xScale);
  chartG.append("g")
    .call(xAxis)
    // x 轴 默认位置在(0,0)，所以需要往下移
    .attr("transform", `translate(0, ${dimensions.boundedHeight})`);
  const yAxis = d3.axisLeft(yScale);
  chartG.append("g").call(yAxis);
}
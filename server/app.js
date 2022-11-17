const express = require('express');
const app = express();
const port = 3000;

const scatterChartRouter = require('./routes/scatterChart');
const pieChartRouter = require('./routes/pieChart');
const barChartRouter = require('./routes/barChart');

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/getScatterChartData', scatterChartRouter);
app.use('/getPieChartData', pieChartRouter);
app.use('/getBarChartData', barChartRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

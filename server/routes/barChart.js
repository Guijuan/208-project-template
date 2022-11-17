const express = require('express');
const fs = require('fs')
const router = express.Router();

/* GET users listing. */

router.get('/', function (req, res, next) {
  // const data = [
  //   { value: 1048, name: 'Search Engine' },
  //   { value: 735, name: 'Direct' },
  //   { value: 580, name: 'Email' },
  //   { value: 484, name: 'Union Ads' },
  //   { value: 300, name: 'Video Ads' },
  // ];
  const data = readCsv()
  res.send(data);
});

function readCsv() {
  let result = []
  let csvFile = fs.readFileSync('E:/Project-W/208-project-template/server/data/barChartData.csv', 'utf-8')
  result = ConvertToList(csvFile)
  // console.log(result);
  return result
}
function ConvertToList(data, callBack) {
  data = data.toString();
  var list = [];
  var rows = [];
  rows = data.split("\n");
  // console.log(data);
  // console.log(rows.length);
  // console.log(rows);
  for (var i = 1; i < rows.length; i++) {
    let temp = rows[i].split(",")
    list.push({
      name: temp[0],
      value: temp[1],
    });
  }
  return list
}

module.exports = router;

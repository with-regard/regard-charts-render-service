var express = require('express');
var bodyParser = require('body-parser');
var highcharts = require('node-highcharts');
var azure = require('azure-storage');
var charts = require('./charts-upload.js');
var sampleOptions = require('./sample.js');

var app = express();

app.use(bodyParser.json());
app.post('/render', function(req, res, next) {
  highcharts.render(req.body, function(err, data) {
    if (err) {
      next(err);
    } else {
      charts.upload(data).then(function(url) {
        res.json({
          url: url
        });
      }, function (err) {
        next(err);
      });
    }
  }); 
});

app.listen(80);

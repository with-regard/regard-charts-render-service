var express = require('express');
var bodyParser = require('body-parser');
var highcharts = require('node-highcharts');
var sampleOptions = require('./sample.js');

var app = express();

app.use(bodyParser.json());
app.post('/render', function(req, res, next) {
  highcharts.render(sampleOptions, function(err, data) {
    if (err) {
      console.log('Error: ' + err);
      next();
    } else {
      res.json({
        url: 'some url',
        data: data
      });
    }
  }); 
});

app.listen(3000);

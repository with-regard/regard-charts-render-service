var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.post('/render', function(req, res, next) { 
  console.log(req.body);
  res.json({
    url: 'some url'
  });
});

app.listen(3000);

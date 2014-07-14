var express = require('express');

var app = express();

app.use(express.bodyParser());
app.post('/render', function(req, res, next) { 
  console.log(req.body);
  res.json({
    url: 'some url'
  });
});

app.listen(3000);

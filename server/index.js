const express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(5000, '127.0.0.1', () => {
  console.log('express server started')
});
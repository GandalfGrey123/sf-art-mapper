const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const router = express.Router();


//temp test
app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());    
app.use('/',router.get('/', (req,res) =>{
  res.render('index.html.ejs');
}));


app.listen(80, '127.0.0.1', () => {
  console.log('express server started')
});
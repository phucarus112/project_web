var express = require('express');
var exphbs  = require('express-handlebars');
const morgan =require('morgan');
require('express-async-errors');

var app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
  }));

app.set('view engine', 'hbs');

app.get("/",function(req,res){
    res.render('Online_Auction');
});

app.use('/admin/mobile', require('./routes/admin/mobile_route'));


//error-handling
app.use((req,res,next)=>{
  res.send('You are lost');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('View error  on console');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})
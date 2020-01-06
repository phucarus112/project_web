var express = require('express');
var exphbs  = require('express-handlebars');
const morgan =require('morgan');
require('express-async-errors');
const session = require('express-session');
var app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //     secure: true
  // }
}))
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
  }));

app.set('view engine', 'hbs');

app.get("/",function(req,res){
    res.render('Online_Auction');
});

app.use('/categories',require('./routes/category_route'));

app.use('/admin/mobile', require('./routes/admin/mobile_route'));
app.use('/admin/laptop', require('./routes/admin/laptop_route'));
app.use('/admin/headphone', require('./routes/admin/headphone_route'));
app.use('/admin/watch', require('./routes/admin/watch_route'));
app.use('/admin/watch', require('./routes/admin/watch_route'));

app.use('/account',require('./routes/admin/account_route'));
app.use('/seller',require('./routes/seller/product_route'));
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
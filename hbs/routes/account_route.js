const express = require('express');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const user_model = require('../models/user_model');
const router = express.Router();

router.get('/register',async(req,res)=>{
    res.render('vwAccount/SignUp');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

router.post('/register',async(req,res)=>{
    const N = 10;
    const hash = bcrypt.hashSync(req.body.raw_password,N);
    const dob = moment(req.body.DOB,'DD/MM/YYYY').format('YYYY-MM-DD');
    const entity = req.body;
    entity.ID=  getRandomInt(100000)+1;
    entity.PASSWORD = hash;
    entity.DOB = dob;
    entity.PERMISSION = 0;
    entity.POINT_PLUS = 0;
    entity.POINT_SUBSTRACT= 0;
    console.log(entity);

    delete entity.raw_password;
    delete entity.dob;

    const result = await user_model.add(entity);
    res.render('vwAccount/SignUp');
});

router.get('/login',  (req, res) => {
    res.render('vwAccount/SignIn',{layout:false});
});

router.post('/login', async (req, res) => {
    const user = await user_model.singleByUserName(req.body.username);
    if (user === null){
        return res.render('vwAccount/SignIn', {
            layout: false,
            err_message: 'Invalid Username'
          });
    }

    const rs = bcrypt.compareSync(req.body.password, user.PASSWORD);
     // bcrypt.compareSync(req.body.password, user.PASSWORD);
      if (rs===false){
      
        return res.render('vwAccount/SignIn', {
          layout: false,
          err_message: 'Login failed'
        });
      }
       
      delete user.f_Password;
      req.session.isAuthenticated = true;
      req.session.authUser = user;
      if(user.PERMISSION == 0)
      {
        res.redirect('/bidder');
      }
      else if(user.PERMISSION == 1)
      {
        res.redirect('/seller');
      }
      else{
        res.redirect('/admin');
      }
      
});

module.exports = router;
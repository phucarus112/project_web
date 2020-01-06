const express = require('express');
const router = express.Router();
const userModel = require('../../models/user_model');
const bcrypt = require('bcryptjs');
router.get('/login',  (req, res) => {
    res.render('vwAccount/SignIn',{layout:false});
});
router.post('/login', async (req, res) => {
    const user = await userModel.singleByUserName(req.body.username);
    if (user === null){
        
   
        return res.render('vwAccount/SignIn', {
            layout: false,
            err_message: 'Invalid Username'
          });
    }

    
      const rs = true;
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
      const url ='/seller';
      res.redirect(url);
});
module.exports = router;
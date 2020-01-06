const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const mobile_model = require('../../models/mobile_model');

router.get('/', async(req,res)=>{
        const rows = await mobile_model.all();
        res.render('vwMobileList/MobileList',{
        mobile: rows,
        empty: rows.length === 0
    });
});

router.get('err',(req,res)=>{
    //try{
      throw new Error('error occured');
   // }
    //catch(err)
   // {
   //     console.log(err.stack);
   //     res.send('View error in console');
  //  }
});

router.post('/patch',async(req,res)=>{
  const result = await mobile_model.patch(req.body);
  res.redirect('/bidder/mobile');
});

router.post('/del',async(req,res)=>{
  const result = await mobile_model.del(req.body.ID);
  res.redirect('/bidder/mobile');
});

module.exports = router;
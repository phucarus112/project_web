const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const mobile_model = require('../../models/mobile_model');

router.get('/', async(req,res)=>{
    //try{
        //const rows = await db.load('select * from mobile');
        const rows = await mobile_model.all();
        res.render('vwMobileList/MobileList',{
        mobile: rows,
        empty: rows.length === 0
    });
});

router.get('/editMobile/:id',(req,res)=>{
    res.render('vwMobileList/editMobile');
})

router.get('/addMobile',(req,res)=>{
        res.render('vwMobileList/addMobile');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var datetime = new Date();

router.post('/addMobile',async(req,res)=>{
     const entity = {
        ID: getRandomInt(1000)+1,
        Name: req.body.txtMobileName,
        Date:  datetime.toISOString().slice(0,10),
        Price: req.body.txtMobilePrice,
        Turn: 0,
        BidderId: 0,
        TimeRemain: `168:00:00`
     }
     const result = await mobile_model.add(entity);
     console.log(result);
     res.render('vwMobileList/addMobile');
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

module.exports = router;
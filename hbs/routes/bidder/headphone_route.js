const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const headphone_model = require('../../models/headphone_model');

router.get('/', async(req,res)=>{
        const rows = await headphone_model.all();
        res.render('vwHeadphoneList/HeadphoneList',{
        headphone: rows,
        empty: rows.length === 0
    });
});

router.get('err',(req,res)=>{
   
      throw new Error('error occured');
});

router.post('/patch',async(req,res)=>{
  const result = await headphone_model.patch(req.body);
  res.redirect('/bidder/headphone');
});

router.post('/del',async(req,res)=>{
  const result = await headphone_model.del(req.body.ID);
  res.redirect('/bidder/headphone');
});

module.exports = router;
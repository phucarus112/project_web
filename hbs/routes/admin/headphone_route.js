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

router.get('/addHeadphone',(req,res)=>{
        res.render('vwHeadphoneList/addHeadphone');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var datetime = new Date();

router.post('/addHeadphone',async(req,res)=>{
     const entity = {
        ID: getRandomInt(10000)+1,
        NAME: req.body.txtHeadphoneName,
        //Date:  datetime.toISOString().slice(0,10),
        PRICE: req.body.txtHeadphonePrice,
        DESCRIPTION: "1",
        CAT_ID: 3,
        STATUS: 0
       // TimeRemain: `168:00:00`
     }
     const result = await headphone_model.add(entity);
     res.render('vwHeadphoneList/addHeadphone');
});

router.get('err',(req,res)=>{
   
      throw new Error('error occured');
});

router.get('/editHeadphone/:id', async(req,res)=>{

  const rows = await headphone_model.single(req.params.id);
  if(rows.length ==0)
  {
    throw new Error('Invalid ID');
  }

    res.render('vwHeadphoneList/editHeadphone',{
      headphone: rows[0]
    });
})

router.post('/patch',async(req,res)=>{
  const result = await headphone_model.patch(req.body);
  res.redirect('/admin/headphone');
});

router.post('/del',async(req,res)=>{
  const result = await headphone_model.del(req.body.ID);
  res.redirect('/admin/headphone');
});

module.exports = router;
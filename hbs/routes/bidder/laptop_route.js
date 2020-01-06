const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const laptop_model = require('../../models/laptop_model');

router.get('/', async(req,res)=>{
        const rows = await laptop_model.all();
        res.render('vwLaptopList/LaptopList',{
        laptop: rows,
        empty: rows.length === 0
    });
});

router.get('/addLaptop',(req,res)=>{
        res.render('vwLaptopList/addLaptop');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var datetime = new Date();

router.post('/addLaptop',async(req,res)=>{
     const entity = {
        ID: getRandomInt(10000)+1,
        NAME: req.body.txtLaptopName,
        //Date:  datetime.toISOString().slice(0,10),
        PRICE: req.body.txtLaptopPrice,
        DESCRIPTION: "1",
        CAT_ID: 2,
        STATUS: 0
       // TimeRemain: `168:00:00`
     }
     const result = await laptop_model.add(entity);
     res.render('vwLaptopList/addLaptop');
});

router.get('err',(req,res)=>{
   
      throw new Error('error occured');
});

router.get('/editLaptop/:id', async(req,res)=>{

  const rows = await laptop_model.single(req.params.id);
  if(rows.length ==0)
  {
    throw new Error('Invalid ID');
  }

    res.render('vwLaptopList/editLaptop',{
      laptop: rows[0]
    });
})

router.post('/patch',async(req,res)=>{
  const result = await laptop_model.patch(req.body);
  res.redirect('/bidder/Laptop');
});

router.post('/del',async(req,res)=>{
  const result = await laptop_model.del(req.body.ID);
  res.redirect('/bidder/Laptop');
});

module.exports = router;
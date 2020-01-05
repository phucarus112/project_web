const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const watch_model = require('../../models/watch_model');

router.get('/', async(req,res)=>{
        const rows = await watch_model.all();
        res.render('vwWatchList/WatchList',{
        watch: rows,
        empty: rows.length === 0
    });
});

router.get('/addWatch',(req,res)=>{
        res.render('vwWatchList/addWatch');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var datetime = new Date();

router.post('/addWatch',async(req,res)=>{
     const entity = {
        ID: getRandomInt(10000)+1,
        NAME: req.body.txtWatchName,
        //Date:  datetime.toISOString().slice(0,10),
        PRICE: req.body.txtWatchPrice,
        DESCRIPTION: "1",
        CAT_ID: 4,
        STATUS: 0
       // TimeRemain: `168:00:00`
     }
     const result = await watch_model.add(entity);
     console.log(result);
     res.render('vwWatchList/addWatch');
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

router.get('/editWatch/:id', async(req,res)=>{

  const rows = await watch_model.single(req.params.id);
  if(rows.length ==0)
  {
    throw new Error('Invalid ID');
  }
   /* const c = {
      Name: req.params.txtMobileName,
    }*/

    res.render('vwWatchList/editWatch',{
      watch: rows[0]
    });
})

router.post('/patch',async(req,res)=>{
  const result = await watch_model.patch(req.body);
  res.redirect('/admin/watch');
});

router.post('/del',async(req,res)=>{
  const result = await watch_model.del(req.body.ID);
  res.redirect('/admin/watch');
});

module.exports = router;
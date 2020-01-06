const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const watch_model = require('../../models/watch_model');
const config = require('../../config/default.json');

router.get('/', async(req,res)=>{
  const limit = config.paginate.limit;
  const catId = req.params.id;

  const page = req.query.page || 1;
  if(page<1)page=1;
  const offset = (page-1)*config.paginate.limit;

  const [total,rows] = await Promise.all([
      watch_model.countByCat(catId),
      watch_model.pageByCat(catId,offset)
  ])


  let nPages = Math.floor(total/limit);
  if(total % limit > 0 )nPages++;
  const page_numbers = [];

  for(i = 1;i <= nPages ;i++)
  {
      page_numbers.push({
          value:i,
          isCurrentPage: i==+page,
      });
  }
        //const rows = await watch_model.all();
        res.render('vwWatchList/WatchList',{
        watch: rows,
        empty: rows.length === 0,
        page_numbers,
        pre_value: +page -1,
        next_value: +page +1,
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
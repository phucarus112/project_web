const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const mobile_model = require('../../models/mobile_model');
const config = require('../../config/default.json');

router.get('/', async(req,res)=>{

      const limit = config.paginate.limit;
      const catId = req.params.id;

      const page = req.query.page || 1;
      if(page<1)page=1;
      const offset = (page-1)*config.paginate.limit;

      const [total,rows] = await Promise.all([
          mobile_model.countByCat(catId),
          mobile_model.pageByCat(catId,offset)
      ])

      //const total = await product_model.countByCat(catId);
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

        res.render('vwMobileList/MobileList',{
        mobile: rows,
        empty: rows.length === 0,
        page_numbers,
        pre_value: +page -1,
        next_value: +page +1,
    });
});

router.get('/addMobile',(req,res)=>{
        res.render('vwMobileList/addMobile');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var datetime = new Date();

router.post('/addMobile',async(req,res)=>{
     const entity = {
        ID: getRandomInt(10000)+1,
        NAME: req.body.txtMobileName,
        //Date:  datetime.toISOString().slice(0,10),
        PRICE: req.body.txtMobilePrice,
        DESCRIPTION: "1",
        CAT_ID: 1,
        STATUS: 0
       // TimeRemain: `168:00:00`
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

router.get('/editMobile/:id', async(req,res)=>{

  const rows = await mobile_model.single(req.params.id);
  if(rows.length ==0)
  {
    throw new Error('Invalid ID');
  }
   /* const c = {
      Name: req.params.txtMobileName,
    }*/

    res.render('vwMobileList/editMobile',{
      mobile: rows[0]
    });
})

router.post('/patch',async(req,res)=>{
  const result = await mobile_model.patch(req.body);
  res.redirect('/admin/mobile');
});

router.post('/del',async(req,res)=>{
  const result = await mobile_model.del(req.body.ID);
  res.redirect('/admin/mobile');
});

module.exports = router;
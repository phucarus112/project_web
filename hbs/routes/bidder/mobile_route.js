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

        res.render('vwMobileList_Bidder/MobileList',{
        mobile: rows,
        empty: rows.length === 0,
        page_numbers,
        pre_value: +page -1,
        next_value: +page +1,
    });
});

router.get('/detail/:id',async(req,res)=>{

    const rows = await mobile_model.detail(req.params.id);
    res.render('vwMobileList_Bidder/detail',{
        detail: rows[0],
        empty: rows.length === 0,
    });
    
});

router.post('/detail/:id',async(req,res)=>{

   
    
});

module.exports = router;
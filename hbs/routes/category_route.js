const express = require('express');
const product_model = require('../models/product_model');
const router = express.Router();
const config = require('../config/default.json');


router.get('/:id/products',async(req,res)=>{

    const limit = config.paginate.limit;
    const catId = req.params.id;

    const page = req.query.page || 1;
    if(page<1)page=1;
    const offset = (page-1)*config.paginate.limit;

    const [total,rows] = await Promise.all([
        product_model.countByCat(catId),
        product_model.pageByCat(catId,offset)
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

    //const rows = await product_model.pageByCat(req.params.id,offset);
    res.render('vwProducts/allByCat',{
        products: rows,
        empty: rows.length === 0,
        page_numbers,
        pre_value: +page -1,
        next_value: +page +1,
    });
});

module.exports = router;
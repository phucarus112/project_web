const express = require('express');
const product_model = require('../models/product_model');
const router = express.Router();

router.get('/:id/products',async(req,res)=>{
    const rows = await product_model.allByCat(req.params.id);
    res.render('vwProducts/allByCat',{
        products: rows,
        empty: rows.length === 0
    });
});

module.exports = router;
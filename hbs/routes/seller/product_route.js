const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const product_model = require('../../models/seller_model');

router.get('/', async (req,res)=>{
        const rows = await product_model.single(req.session.authUser.ID)
        res.render('vwSeller/seller_online_auction',{
            layout: false,
        laptop: rows,
       empty: rows.length === 0
    });
});
router.post('/', async (req,res)=>{
    const row = await product_model.all();
    const entity = {
        ID: row.length+1,
        NAME: req.body.name,
        //Date:  datetime.toISOString().slice(0,10),
        PRICE: req.body.gia,
        DESCRIPTION: "1",
        CAT_ID: 2,
        STATUS: 0,
        ID_SELLER: req.session.authUser.ID
       // TimeRemain: `168:00:00`
     }
     const result = await  product_model.add(entity);
    const rows = await product_model.single(req.session.authUser.ID)
    res.render('vwSeller/seller_online_auction',{
        layout: false,
    laptop: rows,
   empty: rows.length === 0
});
});
module.exports = router;
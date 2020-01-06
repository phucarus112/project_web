const express = require('express');
const mysql = require('mysql');

const multer = require('multer')

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
  destination: function (req, file, cb) {
    cb(null, `./public/imgs/`);
  },
});
const upload = multer({ storage });

const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const product_model = require('../../models/seller_model');

router.get('/', async (req,res)=>{
        const rows = await product_model.single(req.session.authUser.ID)
        const rows1 = await product_model.single3(req.session.authUser.ID)
        
        res.render('vwSeller/seller_online_auction',{
            layout: false,
        laptop: rows,
        laptop1: rows1,
       empty: rows.length === 0,
       empty1: rows1.length ===0
    });
});
router.post('/', async (req,res)=>{

    const row = await product_model.all();
    const entity = {
        ID: row.length+1,
        NAME: req.body.name,
        //Date:  datetime.toISOString().slice(0,10),
        PRICE: req.body.gia,
        DESCRIPTION: req.body.danhgia,
        CAT_ID: 2,
        STATUS: 0,
        ID_SELLER: req.session.authUser.ID
       // TimeRemain: `168:00:00`
     }
     const result = await  product_model.add(entity);
    const rows = await product_model.single(req.session.authUser.ID)
    upload.single('fuMain')(req, res, err => {
        if (err) { }
        
        
      });

    res.render('vwSeller/seller_online_auction',{
        layout: false,
    laptop: rows,
   empty: rows.length === 0
});
});

router.get('/editdetail/:id', async(req,res)=>{
   
    const rows = await product_model.single2(req.params.id);
    if(rows.length ===0)
    {
      throw new Error('Invalid IDjjjj');
    }
  
      res.render('vwSeller/detail',{
        layout: false,
        laptop: rows[0],
        empty: rows.length === 0
      });
  })
  router.post('/editdetail/:id', async(req,res)=>{
    const entity = await product_model.single2(req.params.id);
    entity[0].DESCRIPTION=req.body.danhgia;
    const result = await product_model.patch(entity[0]);
    const url ='/seller';
    res.redirect(url);
   
  })

module.exports = router;
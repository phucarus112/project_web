const express = require('express');
const router = express.Router();
router.use(express.static('public'));

router.get('/', async(req,res)=>{
    res.render('Online_Auction_admin');
});

module.exports = router;
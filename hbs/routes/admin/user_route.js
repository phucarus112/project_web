const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const user_model = require('../../models/user_model');

router.get('/', async(req,res)=>{
        const rows = await user_model.allUser();
        res.render('vwUserList/UserList',{
        user: rows,
        empty: rows.length === 0
    });
});

router.get('err',(req,res)=>{
      throw new Error('error occured');
});

module.exports = router;
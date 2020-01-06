const express = require('express');
const mysql = require('mysql');
const router = express.Router();
router.use(express.static('public'));
const db = require('../../utils/db');
const user_model = require('../../models/user_list_model');

router.get('/', async(req,res)=>{

    const rows  = await user_model.all();
    res.render('vwUserList/UserList',{
        user: rows,
        empty: rows.length === 0,
    });
});

module.exports = router;
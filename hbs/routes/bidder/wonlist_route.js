const express = require('express');
const watchlistModel = require('../../models/wonlist_model');

const router = express.Router();

router.get('/', async (req, res) => {
  const rows = await wonlistModel.all();
  res.render('vwWonList/index', {
    wonlist: rows,
    empty: rows.length === 0
  });
})

router.get('/addWonList', (req, res) => {
  res.render('vwWonList/addWonList');
})

router.post('/addWonList', async (req, res) => {
  const entity = {
    USER_ID: req.body.USER_ID,
    PRODUCT_ID: req.body.PRODUCT_ID,
  }
  const result = await wonlist_model.add(entity);
  console.log(result);
  res.render('vwWonList/addWonList');
})

module.exports = router;
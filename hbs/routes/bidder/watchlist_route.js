const express = require('express');
const watchedlistModel = require('../../models/watchlist_model');

const router = express.Router();

router.get('/', async (req, res) => {
  const rows = await watchedlistModel.all();
  res.render('vwWatched_List/WatchedList', {
    watchlist: rows,
    empty: rows.length === 0
  });
})

router.get('/addWatchedList', (req, res) => {
  res.render('vwWatched_List/addWatchedList');
})

router.post('/addWatchedList', async (req, res) => {
  const entity = {
    USER_ID: req.body.USER_ID,
    PRODUCT_ID: req.body.PRODUCT_ID,
  }
  const result = await watchlist_model.add(entity);
  console.log(result);
  res.render('vwWatched_List/addWatchedList');
})

module.exports = router;
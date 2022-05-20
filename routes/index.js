var express = require('express');
var router = express.Router();
var fetch = require('cross-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/now-showing', async (req, res) => {
  const url = 'https://www.eventcinemas.com.au/Movies/GetNowShowing/';
  const received = await fetch(url).catch(e => console.error(e));
  const json = await received.json();
  res.json(json);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Count = require('word-counting')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Word Counter' });
});


router.post('/', function(req, res,next ){

let request = req.body.request;
const check = Count(request).wordsCount;

res.send('total number of words are:' + check);
// console.log(res.sendStatus(200));


})

module.exports = router;

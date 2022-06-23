var express = require('express');
var router = express.Router();

var database = require('../main');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session : req.session });
});

router.post('/login', function(req, res, next){
	res.send('Test')
    res.end();
})

module.exports = router;

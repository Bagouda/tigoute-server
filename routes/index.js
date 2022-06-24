var express = require('express');
var router = express.Router();

var database = require('../main');


/* GET home page. */
router.get('/api', function(req, res, next) {
 	res.send("Home");
	res.end();
});

router.post('/api/login', function(req, res, next){
	res.send('Test')
    res.end();
})

module.exports = router;

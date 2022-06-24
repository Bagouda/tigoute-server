var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
 	res.send("Home");
	res.end();
});

router.post('/login', function(req, res, next){
    res.send('Test')
    res.end();
});

module.exports = router;

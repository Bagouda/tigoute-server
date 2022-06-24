var express = require('express');
var router = express.Router();


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql11.freesqldatabase.com",
    user: "sql11501090",
    password: "8ZZez17pGn",
    database: "sql11501090",
    port: "3306"
});





/* GET home page. */
router.get('/', function(req, res, next) {
 	res.send("Home");
	res.end();
});

router.post('/login', function(req, res, next){
	query = "Select t.type_nom from type_ingredient t"

	con.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
		 
	  });
    
});

router.post('/register', function (err, result){
	query = "Select t.type_nom from type_ingredient t"

	con.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
		 
	  });
});

router.post('/get_recette:id', function(err, result){
	query = ""
	
	con.query(query, function(err, result){
		if (err) throw err;
		res.send(result);
		
	});
});

module.exports = router;

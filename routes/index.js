var express = require('express');
var router = express.Router();


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "kvf8N8mwnP",
    password: "0hCp9VJt1D",
    database: "kvf8N8mwnP",
    port: "3306"
});



	 

/* GET home page. */
router.post('/', function(req, res, next) {
	

	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result);
		 
	  });
	
 	res.send("Home");
	res.end();
});

router.post('/login', function(req, res, next){
	query = "Select t.type_nom from type_ingredient t"

	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result)
		res.send(result);
		 
	  });
    
});

router.post('/register', function (req, res, next){
	query = "Select t.type_nom from type_ingredient t"

	con.query(query, function (err, result) {
		if (err) throw err;
		res.send(result);
		 
	  });
});

router.get('/get_recette', function(req, res, next){
	query = "SELECT * FROM recette"
	
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result)
		res.send(result);
		 
	  });

});

module.exports = router;

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
	
	res.header("Access-Control-Allow-Origin", "*");
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result);
		 
	  });
	
 	res.send("Home");
	res.end();
});

router.post('/login', function(req, res, next){
	query = "SELECT * FROM utilisateur WHERE mot_de_passe = ? and courriel_utilisateur = ? ";

	res.header("Access-Control-Allow-Origin", "*");
	con.query(query,[req.body.mot_de_passe, req.body.courriel_utilisateur], function (err, result) {
		if (err) throw err;
		console.log(req.body)
		if(result.length == 1){
			res.send(true);
		}
		else{
			res.send(false);
		}
		
		 
	  });
    
});

router.post('/register', function (req, res, next){
	//d'abord on regarde le nombre d'utilisateur
	query = "SELECT * FROM utilisateur";
	res.header("Access-Control-Allow-Origin", "*");
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(err)
		number_user = result.length + 1;
		
			// ensuite on regarde si l'adresse mail est deja utilisée
			query = 'Select * from utilisateur where courriel_utilisateur = ? ';
			con.query(query,req.body.courriel_utilisateur, function (err, result) {
				if (err) throw err;
				console.log(err);
				
				// si un utilisateur à deja la meme adresse on retourne false
				if( result.length > 1)
				{
				res.send(false);
				}
				else
				{
			
						// ensuite on ajoute l'utilisateur
					query = "INSERT INTO utilisateur VALUES (?, ?, ?, ?, ?)"
						user_data = [number_user, req.body.prenom_utilisateur, req.body.nom_utilisateur, req.body.courriel_utilisateur, req.body.mot_de_passe]
						con.query(query,user_data, function (err, result) {
						if (err) throw err;
						console.log(err);
						res.send(number_user);
					 
				  });
				}
			 
			});
		  
	  });
	  
});

router.get('/get_recette', function(req, res, next){
	query = "select * from recette"
	res.header("Access-Control-Allow-Origin", "*");
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result)
		res.send(result);
		 
	  });

});

router.get('/get_perdre', function(req, res, next){
	query = "select * from recette where id_calories == 1"
	res.header("Access-Control-Allow-Origin", "*");
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result)
		res.send(result);
		 
	  });

});

router.get('/get_gagner', function(req, res, next){
	query = "select * from recette where id_calories > 1"
	res.header("Access-Control-Allow-Origin", "*");
	con.query(query, function (err, result) {
		if (err) throw err;
		console.log(result)
		res.send(result);
		 
	  });

});

module.exports = router;

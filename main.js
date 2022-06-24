var database = require('../main');

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql11.freesqldatabase.com",
    user: "sql11501090",
    password: "8ZZez17pGn",
    database: "sql11501090",
    port: "3306"
});
sql = "Select t.type_nom from type_ingredient t"
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });

});

module.exports = con;

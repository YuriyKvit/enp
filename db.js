var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    database: "wechsel",
    user: "root",
    password: "we"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
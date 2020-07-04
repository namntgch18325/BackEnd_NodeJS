const mysql = require('mysql');
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "1",
            database: "nodejs_api"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            console.log("connected to database, ready to execute");
          }); 
module.exports = con;

const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: "mainline.proxy.rlwy.net",

    user: "root",

    password: "klGioSnnVncaHSTALBDDpxrOAGimhyrz",

    database: "railway",

    port: 43578

});

connection.connect((err) => {

    if(err){

        console.log(err);

    }
    else{

        console.log(
            "Database Connected"
        );

    }

});

module.exports = connection;
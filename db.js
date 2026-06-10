const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: mysql.railway.internal,

    user: root,

    password: klGioSnnVncaHSTALBDDpxrOAGimhyrz,

    database: railway,

    port: 3306

});

connection.connect((err) => {

    if(err){

        console.log(
            "Database Connection Failed"
        );

    }
    else{

        console.log(
            "Database Connected"
        );

    }

});

module.exports = connection;
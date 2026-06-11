const mysql = require("mysql2");

const pool = mysql.createPool({

    host: "mainline.proxy.rlwy.net",

    user: "root",

    password: "klGioSnnVncaHSTALBDDpxrOAGimhyrz",

    database: "railway",

    port: 43578,

    waitForConnections: true,

    connectionLimit: 10,

    queueLimit: 0

});

module.exports = pool;
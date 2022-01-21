const mysql = require("mysql2");

console.log(process.env.MYSQL_PASS);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: process.env.MYSQL_PASS + "#",
});

module.exports = pool.promise();

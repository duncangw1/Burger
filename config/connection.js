// Set up MySQL connection
const mysql = require("mysql");
const dotEnv = require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PASSWORD,
  database: "burgers_db",
});

// Make connection
connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;
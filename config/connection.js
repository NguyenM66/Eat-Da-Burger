// mySQL connection

var mysql = require("mysql");
var connection;
require('dotenv').config()

if(process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    root: 3000,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM use.
module.exports = connection;

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "@NoCar4U",
//   database: "burgers_db"
// });
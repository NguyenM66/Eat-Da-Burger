// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all SQL functions
var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			};
			cb(result);
		});
	},
	insertOne: function(table, col1, col2, val1, val2, cb) {
		var queryString = "INSERT INTO " + table + " (" + col1 + ", " + col2 + ") VALUES (" + val1 + ", " + val2 + ");";

		console.log(queryString);

		connection.query(queryString, val1, val2, function(err, result) {
			if(err) {
				throw err;
			}
			cb(result);
		})
	},
	updateOne: function() {

	},
}

//Export the orm for the model (burgers.js)
module.exports = orm;
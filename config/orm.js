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
	insertOne: function(table, col, val, cb) {
		var queryString = "INSERT INTO " + table + " (" + col + ") VALUES ('" + val + "');";

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			};
			cb(result);
		});
	},
	updateOne: function(table, val, cb) {
		console.log(table);
		console.log(val);
		var queryString = "UPDATE " + table + " SET devoured = true WHERE id = " + val + ";";

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err;
			};
			cb(result);
		});
	},
};

//Export the orm for the model (burgers.js)
module.exports = orm;
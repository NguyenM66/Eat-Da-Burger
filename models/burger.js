// Import orm to create functions that interact with the database

var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(col1, col2, val1, val2, cb) {
		orm.insertOne("burgers", col1, col2, val1, val2, function(res) {
			cb(res);
		});
	},
	updateOne: function() {
		
	}
}

// Export the database functions for the controller (burgers_controllers.js)
module.exports = burger;
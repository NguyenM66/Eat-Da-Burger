// Import orm to create functions that interact with the database

var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(val, cb) {
		orm.insertOne("burgers", "burger_name", val, function(res) {
			cb(res);
		});
	},
	updateOne: function(val, cb) {
		console.log(val);
		orm.updateOne("burgers", val, function(res) {
			cb(res);
		})
	}
}

// Export the database functions for the controller (burgers_controllers.js)
module.exports = burger;
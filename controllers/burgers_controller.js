var express = require("express");

var router = express.Router();

// Import  model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var object = {
			burgers: data
		};
		console.log(object);
		res.render("index", object);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.insertOne(["burger_name, devoured"], [req.body.burger_name, req.body.devoured], function(result) {
		res.json({ id: result.insertId });
	});
});

// Export routes for server.js to use.
module.exports = router;
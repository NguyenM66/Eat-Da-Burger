var express = require("express");

var router = express.Router();

// Import  model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		//console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


router.post("/", function(req, res) {
	console.log(req.body.burger);
	burger.insertOne(req.body.burger, function(result) {
		res.redirect("/");
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne(req.params.id, function(result) {
		if(result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export routes for server.js to use.
module.exports = router;
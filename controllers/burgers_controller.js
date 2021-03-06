var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//loads all burgers from db
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Adds or creates a burger in the db
router.post("/api/addburger", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/devourburger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("burgerId", req.params.id);

  console.log("condition", condition);

  //changes the status of an eaten or devoured burger
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.put("/api/reorderburger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("burgerId", req.params.id);

  console.log("condition", condition);

  //changes the status of an eaten or devoured burger
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




// Export routes for server.js to use.
module.exports = router;

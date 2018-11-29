// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(object, condition, cb) {
    objValue = `devoured = ${object.devoured}`;
    orm.updateOne("burgers", objValue, condition, res => {
        cb(res);
    });
  }
};

// Export the database functions for the controller (burgers-controller.js).
module.exports = burger;

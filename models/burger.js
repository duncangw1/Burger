// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;

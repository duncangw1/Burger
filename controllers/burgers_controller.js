// Dependencies
const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all of our routes and set up logic within those routes
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", (req, res) => {
  burger.insertOne(["burger_name"], [req.body.burger_name], () => {
    res.redirect("/");
  });
});

router.put("/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    () => {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use
module.exports = router;

const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


//GET - select all the burgers from the DB//
router.get("/", (req, res) => {
  burger.selectAll()
  .then ((data) => {
    //console.log("GET:", data);
    //out the data in a handlebars object
  //  console.log(data);
    const hbsObject = {
      burgers: data.rows
    };
   // console.log(hbsObject.toString());
    //renders the list of burgers on the index handlebar view
    res.render("index", hbsObject);
   //res.render("hello")

  });
});

//POST - Insert a new burger into the DB//
router.post("/api/burgers/create", (req, res) => {
  console.log(req.body);
  burger.insertOne(['burger_name,devoured'], [req.body.name])
  .then ((data) => {
    console.log(data);
    //direct the server to go fetch the latest burgers
    res.redirect("/");
  });
});

//PUT - update a value in the database
router.put("/api/burgers/devoured:id", (req, res) => {
  console.log(req.params.id)
  burger.updateOne(req.body.eaten, req.params.id)
  .then ((data) => {
    if (data.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });

});

//DELETE - delete a record from dB
router.delete("/api/burgers/delete:id", function(req, res) {
  burger.deleteOne(req.params.id)
  .then ((data) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
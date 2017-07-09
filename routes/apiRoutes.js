var express = require("express");
var quotesController = require("../controllers/quotesController");
var request = require('request');

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
router.post("/quotes", quotesController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", quotesController.destroy);
//Get the results of the API Call
router.get("/speciesList", quotesController.search);
//Create a New User
router.post("/user", quotesController.createUser);
//Create a New Species
router.post("/saveSpecies", quotesController.createSpecies);
//Get Saved Species
//router.get("/savedSpecies", quotesController.savedSpecies);


module.exports = router;

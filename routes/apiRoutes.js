var express = require("express");
var quotesController = require("../controllers/quotesController");
var request = require('request');

var router = new express.Router();

router.patch("/species/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/quotes/:id", quotesController.destroy);
//Get the results of the API Call
router.get("/speciesList", quotesController.search);
//Get the results of the New API Call
router.get("/speciesList2", quotesController.searchSpecies);
//Create a New User
router.post("/user", quotesController.createUser);
//Create a New Species
router.post("/saveSpecies", quotesController.createSpecies);
//Get Saved Species
router.get("/savedSpecies", quotesController.savedSpecies);


module.exports = router;

var express = require("express");
var speciesController = require("../controllers/speciesController");
var router = new express.Router();

router.patch("/species/:id", speciesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/species/:id", speciesController.destroy);
//Get the results of the API Call
router.get("/speciesList", speciesController.search);
//Get the results of the New API Call
router.get("/speciesList2", speciesController.searchSpecies);
//Create a New User
router.post("/user", speciesController.createUser);
//Create a New Species
router.post("/saveSpecies", speciesController.createSpecies);
//Get Saved Species
router.get("/savedSpecies", speciesController.savedSpecies);


module.exports = router;

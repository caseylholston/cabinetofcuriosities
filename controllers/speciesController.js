var Quote = require("../models/quote");
var User = require("../models/user");
var Species = require("../models/species");
var request = require("request");

module.exports = {
// This method creates new users
  createUser: function(req, res) {
    console.log(req.body);
    User.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },

  // This method creates new species
  createSpecies: function(req, res) {
    //console.log("Controller:",req.body);
    Species.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  },
//This call will pull species from the database
  savedSpecies: function(req,res) {
    //console.log("Saved Req Body:" , req.query)
    var query = req.query
    Species.find(query)
      .then(function(doc) {
       // console.log("Doc: ", doc);
        res.json(doc);
      }).catch(function(err) {
        //console.log(err);
        res.json(err);
      });
  },


  // This method handles updating quotes
  update: function(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    Species.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
        console.log("Doc:",doc);
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting quotes
  destroy: function(req, res) {
    Species.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  //This method will hit the Encyclopedia of Life API
  search: function(req,res) {
        var queryUrl ="http://eol.org/api/search/Robin.json?";
        //var queryUrl ="http://eol.org/api/search/Robin.json?";
	        request(queryUrl, function (error, response, body){
            console.log(body);
            newObject = JSON.parse(body);
            console.log(newObject);
            newBody = body.replace(/"/g,"");
            console.log("New Body", newBody);
            console.log(newBody.totalResults);
            res.send(newObject);
          });
  },

  searchSpecies: function(req,res) {
        //console.log(req);
        var search = req.query.newSearch;
        //console.log("Req Query Search:",req.query);
        var queryUrl =`http://eol.org/api/search/${search}.json?`;
        //var queryUrl ="http://eol.org/api/search/Robin.json?";
	        request(queryUrl, function (error, response, body){
            //console.log(body);
            newObject = JSON.parse(body);
            //console.log(newObject);
            //newBody = body.replace(/"/g,"");
            //console.log("New Body", newBody);
            //console.log(newBody.totalResults);
            res.send(newObject);
          });
  }

};


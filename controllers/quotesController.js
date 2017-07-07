var Quote = require("../models/quote");
var request = require("request");

module.exports = {
  // This method handles retrieving quotes from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Quote.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new quotes
  create: function(req, res) {
    Quote.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating quotes
  update: function(req, res) {
    Quote.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting quotes
  destroy: function(req, res) {
    Quote.remove({
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
	        request(queryUrl, function (error, response, body){
            //console.log(body);
            newBody = body.replace(/"/g,"");
            console.log("New Body", newBody);
            res.send(newBody);
          });
  }
    

};

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var speciesSchema = new Schema({ 
  
  species: {
      type:String
  },
  
  user : { 
    type: String,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

  eolId: {
      type:Number
  },
  
  speciesSighted: {
    type: Boolean,
    default: false
  },

  speciesWishList: {
    type: Boolean,
    default: false
  },
  speciesNotes: {
    type: String
  }
});

speciesSchema.index({ user: 1, eolId: 1 }, { unique: true }); // schema level

// Pass the schema to the User model
var Species = mongoose.model("Species", speciesSchema);

// Export the User model
module.exports = Species;
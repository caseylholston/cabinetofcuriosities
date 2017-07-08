var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({ 

  token: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // userCreated: just the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// Pass the schema to the User model
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
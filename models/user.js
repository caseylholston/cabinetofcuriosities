var userSchema = mongoose.Schema({  

  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
});


// Pass the schema to the User model
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
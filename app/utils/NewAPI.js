import axios from "axios";

const NewAPI = {
  // Saves a new species to the db
  saveUser: function(token, email) {
    return axios.post("/api/user", { token,email});
  },
  
  saveSpecies: function(species, user, eolId) {
    return axios.post("/api/saveSpecies", { species, user, eolId });
  },
  // Retrieves all species from the api endpoint
  getSpecies: function() {
    return axios.get("/api/speciesList")
     .then(function(response){
       console.log(response.data.results);
    return (response.data.results);
  });  
  },
    // Retrieves all locations from the db
  getLocations: function() {
    return axios.get("/api/quotes");
  },
    // Saves a new location to the db
  saveLocation: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // Deletes a species from the db
  deleteSpecies: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
    // Deletes a location from the db
  deleteLocation: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // Toggles a species sighted property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  },
  searchSpecies: function(newSearch) {
   return axios.get(`http://eol.org/api/search/${newSearch}`);
},
  searchLocation: function(newSearch) {
   return axios.get(`http://eol.org/api/search/${newSearch}`);
  }
};

export default NewAPI;

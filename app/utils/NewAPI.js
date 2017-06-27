import axios from "axios";

const NewAPI = {
  // Retrieves all species from the db
  getSpecies: function() {
    return axios.get("/api/quotes");
  },
    // Retrieves all locations from the db
  getLocations: function() {
    return axios.get("/api/quotes");
  },
  // Saves a new species to the db
  saveSpecies: function(text) {
    return axios.post("/api/quotes", { text });
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
  searchSpecies: function(searchTerm) {
   return axios.get(`http://eol.org/api/search/${searchTerm}`);
  }
};

export default NewAPI;

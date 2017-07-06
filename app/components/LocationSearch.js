import React, { Component } from "react";
import Panel from "./common/Panel";
import SearchForm from "./common/SearchForm";
import MapBox from "./MapBox";
import API from "../utils/API";
import NewAPI from "../utils/NewAPI";


class LocationSearch extends Component {
  constructor() {
    super();
    this.state = {
      species: []
    };
    // Binding getQuotes to this component since we'll be passing this method to 
    // other components to use
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes once the component has mounted
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      const favoriteQuotes = res.data.filter(quote => quote.favorited);
      this.setState({ quotes: favoriteQuotes });
    });
  }
  // A helper method for rendering one panel for each species
  renderSpecies() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Search a Location</h1>
          <p>Enter a location below.</p>
        </div>
        <div className="container">
        <div className="row">
            <SearchForm
          />
            <MapBox
        />
          {this.renderSpecies()}
        </div>
        </div>
      </div>
    );
  }
}

export default LocationSearch;

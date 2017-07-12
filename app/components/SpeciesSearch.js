import React, { Component } from "react";
import Panel from "./common/Panel";
import SearchForm from "./common/SearchForm";
import API from "../utils/API";
import NewAPI from "../utils/NewAPI";


class SpeciesSearch extends Component {
  constructor() {
    super();
    this.state = {
      species: [],
      species2: []
    };
    // Binding getSpecies to this component since we'll be passing this method to 
    // other components to use
    this.searchSpecies = this.searchSpecies.bind(this);
  }
  // Getting all species once the component updates
  // componentDidUpdate() {
  //   this.getSpecies();
  // }
//   getQuotes() {
//     API.getQuotes().then((res) => {
//       const favoriteQuotes = res.data.filter(quote => quote.favorited);
//       this.setState({ quotes: favoriteQuotes });
//     });
//   }
  //   searchSpecies() {
  //   NewAPI.searchSpecies().then((res) => {
  //     const speciesList = res.data.filter(species => species.returned);
  //     this.setState({ species: returned });
  //   });
  // }
  // A helper method for rendering one panel for each species
  renderSpecies() {
    return this.state.species.map(species => (
      <Panel
        species={species.content}
        key={species.id}
        user={localStorage.user}
        eolId={species.id}
        searchSpecies={this.searchSpecies}
      />
    ));
  }

      renderSavedSpecies() {
    return this.state.species2.map(species2 => (
      <Panel
        species={species2.species}
        key={species2._id}
        user={localStorage.user}
        eolId={species2.id}
        searchSpecies={this.searchSpecies}
      />
    ));
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Find a species</h1>
          <p>Enter a species below to start your search.</p>
        </div>
        <div className="container">
        <div className="row">
            <SearchForm
            />
          {this.renderSpecies()}
          {this.renderSavedSpecies()}
        </div>
        </div>
      </div>
    );
  }
}

export default SpeciesSearch;

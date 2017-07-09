import React, { Component } from "react";
import Panel from "./common/Panel";
import SearchForm from "./common/SearchForm";
import API from "../utils/API";
import NewAPI from "../utils/NewAPI";


class SpeciesSearch extends Component {
  constructor() {
    super();
    this.state = {
      species: []
    };
    // Binding getSpecies to this component since we'll be passing this method to 
    // other components to use
    this.searchSpecies = this.searchSpecies.bind(this);
  }
  // Getting all species once the component updates
  componentDidUpdate() {
    this.getSpecies();
  }
//   getQuotes() {
//     API.getQuotes().then((res) => {
//       const favoriteQuotes = res.data.filter(quote => quote.favorited);
//       this.setState({ quotes: favoriteQuotes });
//     });
//   }
    searchSpecies() {
    NewAPI.searchSpecies().then((res) => {
      const speciesList = res.data.filter(species => species.returned);
      this.setState({ species: returned });
    });
  }
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

  //     rendersavedSpecies() {
  //   return this.state.species.map(species => (
  //     <Panel
  //       species={species.species}
  //       key={species._id}
  //       user={localStorage.user}
  //       eolId={species.id}
  //       searchSpecies={this.searchSpecies}
  //     />
  //   ));
  // }

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
          {/*{this.renderSavedSpecies()}*/}
        </div>
        </div>
      </div>
    );
  }
}

export default SpeciesSearch;

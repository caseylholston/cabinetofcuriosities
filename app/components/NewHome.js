import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import SearchForm from "./common/SearchForm";
import API from "../utils/API";
import NewAPI from "../utils/NewAPI";

class NewHome extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.searchSpecies = this.getQuotes.bind(this);
  }
  // Returning search results when search was conducted
  componentDidUpdate() {
    this.searchSpecies();
  }
  searchSpecies() {
    NewAPI.searchSpecies().then((res) => {
      this.setState({ species: res.data });
    });
  }
  // A helper method for rendering one panel for each quote
  renderSpecies() {
    return this.state.species.map(species => (
      <Panel
        species={quote}
        key={species._id}
        searchSpecies={this.searchSpecies}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <QuoteForm
            getQuotes={this.getQuotes}
          />
          <SearchForm
          />
        </div>
        <div className="row">
          <hr />
          {this.renderQuotes()}
        </div>
      </div>
    );
  }
}

export default Home;

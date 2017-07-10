import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import SearchForm from "./common/SearchForm";
import LocationSearch from "./LocationSearch";
import SpeciesSearch from "./SpeciesSearch";
import API from "../utils/API";
import NewAPI from "../utils/NewAPI";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      species:[],
      species2:[],
      user: localStorage.user
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
    this.getSpecies = this.getSpecies.bind(this);
    this.getSavedSpecies = this.getSavedSpecies.bind(this);

  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
    this.getSpecies();
    this.savedSpecies();
    
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
    getSpecies() {
    NewAPI.getSpecies().then((res) => {
      //console.log(res);
      this.setState({ species: res });
    });
  }

    getSavedSpecies(user) {
    NewAPI.savedSpecies().then((res2) => {
      console.log("Res2: ", res2);
      this.setState({ species2: res2 });
    });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }

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
          {this.renderSpecies()}
          {this.renderSavedSpecies()}
        </div>
      </div>
    );
  }
}

export default Home;

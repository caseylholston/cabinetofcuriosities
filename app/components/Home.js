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
      user: localStorage.user
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
    this.getSpecies = this.getSpecies.bind(this);

  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
    this.getSpecies();
    
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
    getSpecies() {
    NewAPI.getSpecies().then((res) => {
      console.log(res);
      this.setState({ species: res });
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
        </div>
      </div>
    );
  }
}

export default Home;

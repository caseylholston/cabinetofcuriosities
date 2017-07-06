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
      species:[]
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
    this.getSpecies = this.getSpecies.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
    //this.getSpecies();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
    getSpecies() {
    NewAPI.getSpecies().then((res) => {
      this.setState({ species: res.data });
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

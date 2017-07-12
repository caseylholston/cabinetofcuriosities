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
      species3:[],
      user: localStorage.user
    };
    // Binding functions to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
    this.getSpecies = this.getSpecies.bind(this);
    this.getSavedSpecies = this.getSavedSpecies.bind(this);
    this.returnSpeciesResults= this.returnSpeciesResults.bind(this);

  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
    this.getSpecies();
    this.getSavedSpecies();
    //this.returnSpeciesResults();
    
  }
  // Getting all species once the component updates
  //   componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.species !== this.props.species) {
  //     console.log("Updated");
  //     console.log("Previous state:", prevState);
  //     console.log("Current state:", this.state);
  //     this.getSpecies();
  //   }
  //   else {
  //     alert("You have done well. Seymour is very full!");
  //   }
  // }
  
 returnSpeciesResults(){
  this.setState({species3: resulting })
 }

  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  getSpecies() {
    NewAPI.getSpecies().then((res) => {
      console.log("Get Species Res: ",res);
      this.setState({ species: res });
    });
  }
  
    getSavedSpecies(user) {
      user = localStorage.user
      console.log("Get Function:", user);
    NewAPI.savedSpecies(user).then((result) => {
      console.log("Res2: ", result);
      this.setState({ species2: result });
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
    return this.state.species3.map(species3 => (
      <Panel
        species={species3.content}
        key={species3.id}
        user={localStorage.user}
        eolId={species3.id}
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
        eolId={species2.eolId}
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
          {/*{this.renderQuotes()}*/}
          {this.renderSpecies()}
          {this.renderSavedSpecies()}
        </div>
      </div>
    );
  }
}

export default Home;

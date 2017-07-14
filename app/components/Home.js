import React, { Component } from "react";
import Panel from "./common/Panel";
import Panel2 from "./common/Panel2";
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
      species:[],
      species2:[],
      species3:[],
      user: localStorage.user
    };
    // Binding functions to our component since we'll be passing this
    // method to child components
    this.getSavedSpecies = this.getSavedSpecies.bind(this);
    this.returnSpeciesResults= this.returnSpeciesResults.bind(this);

  }
  // Getting species when the component mounts
  componentDidMount() {
    this.getSavedSpecies();
    this.returnSpeciesResults();
    
  }

 returnSpeciesResults(newSearch){
  NewAPI.searchSpecies(newSearch).then((resulting)=>{
    //console.log("Resulting: ", resulting);
  this.setState({species3: resulting });
  });
 }

  getSavedSpecies(user) {
    user = localStorage.user
    //console.log("Get Function:", user);
  NewAPI.savedSpecies(user).then((result) => {
    //console.log("Res2: ", result);
    this.setState({ species2: result });
  });
}

  renderSpecies() {
    return this.state.species3.map(species3 => (
      <Panel
        species={species3.content}
        key={species3.id}
        user={localStorage.user}
        eolId={species3.id}
        getSavedSpecies={this.getSavedSpecies}
      />
    ));
  }

  renderSavedSpecies() {
    return this.state.species2.map(species2 => (
      <Panel2
        specimen={species2}
        species={species2.species}
        key={species2._id}
        id={species2._id}
        user={localStorage.user}
        eolId={species2.eolId}
        getSavedSpecies={this.getSavedSpecies}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>My Cabinet of Curiosities</h2>
          {this.renderSavedSpecies()}
        </div>
        <div className="row">
          <hr />
          <SearchForm
            returnSpeciesResults={this.returnSpeciesResults}          
          />
        </div>
        <div className="row">
          {this.renderSpecies()}
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import API from "../../utils/API";
import NewAPI from "../../utils/NewAPI";

class Panel extends Component {
  sightedSpecies(specimen) {
    NewAPI.sightedSpecies(specimen).then(this.props.getSavedSpecies);
  }

  speciesWishList(specimen) {
    NewAPI.speciesWishList(specimen).then(this.props.getSavedSpecies);
  }
  deleteSpecies(id) {
    NewAPI.deleteSpecies(id).then(this.props.getSavedSpecies);
  }
  
  // favoriteQuote toggles a quote's favorite status in the db and then
  // reloads all quotes in our app
  // favoriteQuote(quote) {
  //   API.favoriteQuote(quote).then(this.props.getQuotes);
  // }
  //  // deleteQuote deletes a quote in the db and then
  // // reloads all quotes in our app
  // deleteQuote(id) {
  //   API.deleteQuote(id).then(this.props.getQuotes);
  // }
  render() {
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <div className="panel panel-default">
          <div className="panel-body">          
              <i              
              onClick={() => this.sightedSpecies(this.props.specimen)}
              style={styles.sightedStyle}
              className={this.props.specimen.speciesSighted ? "fa fa-check-square-o" : "fa fa-binoculars" }
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteSpecies(this.props.specimen._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            Species: {this.props.species}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wishlistStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  },
  sightedStyle: {
  cursor: "pointer",
  marginRight: 5,
  float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;

import React, { Component } from "react";
import API from "../../utils/API";
import NewAPI from "../../utils/NewAPI";

class Panel extends Component {
  sightedSpecies(specimen) {
    NewAPI.sightedSpecies(specimen).then(this.props.getSavedSpecies);
  }
  deleteSpecies(id) {
    API.deleteQuote(id).then(this.props.getSavedSpecies);
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
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">          
              <i              
              onClick={() => this.sightedSpecies(this.props.specimen)}
              style={styles.sightedStyle}
              className={this.props.specimen.speciesSighted ? "fa fa-flag" : "fa fa-flag-o" }
              aria-hidden="true"
            />
              <i
              onClick={() => this.wishlist(this.props.species)}
              style={styles.wishlistStyle}
              className={this.props.specimen.wishlisted ? "fa fa-flag": "fa fa-binoculars" }
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteSpecies(this.props.specimen._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {this.props.species}
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

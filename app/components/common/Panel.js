import React, { Component } from "react";
import API from "../../utils/API";
import NewAPI from "../../utils/NewAPI";

class Panel extends Component {
  saveSpecies(species, user, eolId) {
    NewAPI.saveSpecies(species, user, eolId).then(this.props.getSavedSpecies);
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
              onClick={() => this.saveSpecies(this.props.species, this.props.user, this.props.eolId)}
              style={styles.saveStyle}
              className="fa fa-plus"
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
  saveStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  }
};

export default Panel;

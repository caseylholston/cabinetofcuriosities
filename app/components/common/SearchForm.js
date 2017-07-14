import React, { Component } from "react";
import API from "../../utils/API";
import NewAPI from "../../utils/NewAPI";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  handleButtonClick() {
    const newSearch = this.state.inputValue;
    console.log(newSearch);
    //NewAPI.searchSpecies(newSearch).then((resulting)=>{
      //console.log("Resulting: ", resulting);
      this.props.returnSpeciesResults(newSearch);
    //});
    this.setState({ inputValue: "" });
  }
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            What are you searching for?
          </label>
          <textarea
            style={{
              resize: "none",
              fontSize:"2opx",
              color: "white",
              textAlign: "center"
            }}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder=""
            className="form-control"
            id="input-box"
            rows="3"
          />
          <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Search The Encyclopedia of Life
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    textAlign: "center",
    marginTop: 10
  }
};

export default SearchForm;
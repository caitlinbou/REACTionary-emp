import React, { Component } from "react";

export default class SearchForm extends Component {
constructor(props){
    super(props);
    this.state = {
        searchValue: "",
    }
this.handleButtonClick = this.handleButtonClick.bind(this);
this.handleInputChange = this.handleInputChange.bind(this);

  };
  handleButtonClick(event) {
    event.preventDefault();
    this.props.search(this.state.searchValue);
  }

  handleInputChange() {
    this.setState({searchValue: document.querySelector("#search").value})
  }

  render() {
    return (
      <form >
        <div className="form-group">
          <div className="form-group">
            <input
              value={this.state.searchValue}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              className="form-control"
              id="search"
              placeholder="Search by Name"
            />
          </div>

          <button onClick={this.handleButtonClick} type="button" className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
}

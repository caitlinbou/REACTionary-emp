import React, { Component } from "react";

export default class SearchForm extends Component {

state = {
    searchValue: ""
}
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.search(this.state.searchValue);
  }

  handleInputChange = ()=>{
    this.setState({searchValue: document.querySelector("#search").value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <input
              value={this.state.searchValue}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              className="form-control"
              id="search"
              placeholder="Search by First Name"
            />
          </div>
          <button type="button" className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
}

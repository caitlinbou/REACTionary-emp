import SearchForm from "./SearchForm";
import React, { Component } from "react";

export default class Jumbotron extends Component {

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <SearchForm results={this.props.results} search={this.props.search}/>
        <hr className="my-4" />
        <p className="lead">Click on "Name" below to sort</p>
      </div>
    );
  }
}

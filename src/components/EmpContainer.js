import React, { Component } from "react";
import axios from "axios";
import EmpData from "./EmpData";
import Jumbotron from "./Jumbotron.js";



export default class EmpContainer extends Component {
  state = {
    results: [],
    originalResults: []
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us")
    //   .then((res) => console.log({results: res.data.results}))
      .then((res) => {
          this.setState({ results: res.data.results });
          this.setState({ originalResults: res.data.results })
      })
      .catch((err) => console.log(err));
  }

  searchByFirstName=(firstName)=>{
      let searchResults;
      if (!firstName){
          searchResults = this.state.originalResults;
      }else {
            searchResults = this.state.originalResults.filter(employee =>{
            return employee.name.first === firstName;
        });
      }
    
    this.setState({results: searchResults})
  }

  sortByFirst=()=>{
    const nameSort = this.state.results; 
    nameSort.sort().then((res)=> console.log({results: res.data.results}))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron results={this.state.results} search={this.searchByFirstName} />
        <EmpData results={this.state.results} />
      </div>
    );
  }
}

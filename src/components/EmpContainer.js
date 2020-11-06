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
    let sortedResults = this.state.results.sort((a,b)=>{
        let name1 = a.name.first,
            name2 = b.name.first;
        if (name1 < name2) return -1;
        if (name1 > name2) return 1;
        return 0;
    }); 
    this.setState({ results: sortedResults });

  }

  render() {
    return (
      <div>
        <Jumbotron results={this.state.results} search={this.searchByFirstName} />
        <EmpData results={this.state.results} sort={this.sortByFirst} />
      </div>
    );
  }
}

import React, { Component } from 'react'
import axios from "axios";
import EmpData from "./EmpData";

export default class EmpContainer extends Component {

    state = {
        results: [],
    };

    componentDidMount(){
        axios.get("https://randomuser.me/api/?results=20&nat=us")
        // .then((res) => console.log({results: res.data.results}))
        .then((res) => this.setState({results: res.data.results}))
        .catch(err => console.log(err))
    };
    
    render() {
        return (
            <div>
             <EmpData results={this.state.results}/>
            </div>
        )
    };
}

import React, { Component } from 'react'
import axios from "axios";
import EmpData from "./EmpData";
// function buildEmployeeArray(arr){
//     const emplArray =arr.map(function({picture, name, phone, email, dob}){
//         console.log(picture.thumbnail, name, phone, email, dob)
//     //    return (`${name.first} ${name.last}`)
//     })
//     console.log(emplArray)
// };
// {picture: picture.thumbnail, name: (name.first + name.last), phone, email, dob}
export default class EmpContainer extends Component {

    state = {
        results: [],
    };

    componentDidMount(){
        this.getEmployees()
    };

    getEmployees = () => {
        axios.get("https://randomuser.me/api/?results=20&nat=us")
        // .then((res) => console.log({results: res.data.results}))
        .then((res) => this.setState({results: res.data.results}))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
             <EmpData results={this.state.results}/>
            </div>
        )
    };
}

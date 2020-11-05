import React, { Component } from 'react'
import axios from "axios";

function buildEmployeeArray(arr){
    const emplArray =arr.map(function({picture, name, phone, email, dob}){
        console.log(picture.thumbnail, name, phone, email, dob)
    //    return (`${name.first} ${name.last}`)
    })
    console.log(emplArray)
};
export default class EmpContainer extends Component {

    state = {
        results: {},
    };

    componentDidMount(){
       axios.get("https://randomuser.me/api/?results=20&nat=us")
        .then(({data: {results}}) => buildEmployeeArray(results))
        console.log("componentDidMount", {data: {results}})
        .then(results => this.setState({ results: results.data}))
        
        .catch(err => console.log(err));
    };

    buildEmployeeArray = (arr) => {
        axios.get("https://randomuser.me/api/?results=20&nat=us")
        
        const emplArray =arr.map(function({picture, name, phone, email, dob}){
            console.log(picture.thumbnail, name, phone, email, dob)
        //    return (`${name.first} ${name.last}`)
        })
        console.log(emplArray)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    };
}

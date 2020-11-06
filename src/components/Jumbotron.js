import SearchForm from "./SearchForm"
import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <SearchForm/>
        <p className="lead">Click on "Name" below to sort</p>
        <hr className="my-4"/>
        
    </div>
        )
    }
}



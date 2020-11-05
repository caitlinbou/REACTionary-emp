import React from 'react'

export default function Jumbotron() {
    return (
    <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Click on Name to filter by name</p>
        <hr className="my-4"/>
        {/* form search will go here */}
    </div>
    )
}

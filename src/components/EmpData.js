import React from "react";

export default function EmpData(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              {" "}
              <a onClick={props.sort}>Name</a>
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((result) => (
            <tr key={result.id.value}>
              <td>
                <img
                  alt={result.name.first + " " + result.name.last}
                  className="img-fluid"
                  src={result.picture.thumbnail}
                />
              </td>
              <td>{result.name.first + " " + result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
              <td>{result.dob.date.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


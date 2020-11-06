import React from "react";

export default function EmpData(props) {
  return (
    <div>
      {props.results.map((result) => (
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
              <td>{result.dob.date}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}
// TODO: convert dob to more usable form


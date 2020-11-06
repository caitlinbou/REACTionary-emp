import React from "react";

export default function SearchForm() {
  return (
    <div className="form-group">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search by Name"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </div>
  );
}

import React from "react";
import "./style.css";
import { Grid, Row, Col } from 'react-bootstrap';

function SearchForm(props) {
  return (
    
    <Col size="md-12">
    <form>
      <div className="form-group">
        {/* <label htmlFor="search">Search:</label> */}
        <Col size="xs-9 sm-10">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
          size="35"
        />
        {/* </Col>
        <Col size="xs-3 sm-2"> */}
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-10">
          <strong>Search</strong>
        </button>
        </Col>
      </div>
    </form>
    </Col>
    
  );
}

export default SearchForm;

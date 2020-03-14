import React, { Component } from "react";
import SearchForm from "./SearchForm-Giphy";
import ResultList from "./ResultList-Giphy";
import API from "../utils/API-Giphy";
import Giphy from "./pages/Giphy";

class SearchResultContainerGiphy extends Component {
  state = {
    search: "",
    // limit:2,
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("kittens");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
    //   .then(res => this.setState({ results: res.data.items }))
      // .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
    
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainerGiphy;

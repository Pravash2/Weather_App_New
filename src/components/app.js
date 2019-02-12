import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import TableDesign from "./table";
import Weather from "../containers/weatherList";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Weather />
      </div>
    );
  }
}

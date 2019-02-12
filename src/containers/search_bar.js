import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

import Input from "./input";

const styles = {
  display: "flex",
  justifyContent: "center",
  fontWeight: "300",
  fontSize: "50px"
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handelInput = this.handelInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handelInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.input);
    this.setState({ input: "" });
  }
  render() {
    return (
      <div>
        <p style={styles}>Search Your Weather </p>
        <Input handel={this.handelInput} onFormSubmits={this.onFormSubmit} />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

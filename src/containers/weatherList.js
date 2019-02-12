import React, { Component } from "react";

import { connect } from "react-redux";
import Table from "../components/table";

class weatherList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.weather) return <Table row={this.props.weather} />;
    else return <div>Lodding</div>;
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(weatherList);

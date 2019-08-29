import React from "react";
import { withRouter } from "react-router-dom";

class cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: null };
  }
  render() {
    return (
      <div>
        <h1>cities Dummy</h1>
      </div>
    );
  }
}

export default withRouter(cities);

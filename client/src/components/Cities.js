import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class cities extends React.Component {
  render() {
    console.log(this.props.cities);
    return (
      <div>
        <h1>cities Dummy</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};
export default connect(mapStateToProps)(withRouter(cities));

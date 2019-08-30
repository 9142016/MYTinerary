import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CitiesList extends React.Component {
  //function that creates styled divs per city
  citiesBody() {
    if (this.props.cities) {
      let body = [];
      this.props.cities.forEach(city => {
        body.push(
          <NavLink to={"/itineraries/" + city.name} key={city._id}>
            <h2>{city.name}</h2>
            <img src={city.preview_img} alt="preview card for city" />
          </NavLink>
        );
      });
      return body;
    }
  }
  render() {
    return (
      <div>
        <h1>All Cities</h1>
        {this.citiesBody()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};
export default connect(mapStateToProps)(withRouter(CitiesList));

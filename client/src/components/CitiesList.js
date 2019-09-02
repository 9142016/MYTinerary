import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCities } from "../store/actions/citiesActions";
import "./css/previewLists.css";

class CitiesList extends React.Component {
  constructor() {
    super();
    this.state = {
      citiesFilter: ""
    };
  }
  //on mount, fetch cities form MongoDB, set redux state, and store here in props
  componentDidMount() {
    this.props.getCities();
  }

  // determines relevant cities to filter
  // if this.state.citiesFilter is empty, return all cities from props provided by redux state
  // otherwise if this.state.citiesFilter is NOT empty, map relevent array from all cities using the filter
  returnRelevantCities() {
    let cities = [];
    this.state.citiesFilter !== ""
      ? this.props.cities.map(city => {
          if (
            city.name
              .toLowerCase()
              .includes(this.state.citiesFilter.toLowerCase())
          ) {
            cities.push(city);
          }
        })
      : (cities = this.props.cities);
    return cities;
  }

  //function that creates styled divs per city
  citiesBody() {
    let relevantCities = this.returnRelevantCities();
    let body = relevantCities.map(city => {
      return (
        <div className="cardbody" key={city._id}>
          <NavLink to={"/itineraries/" + city.name}>
            <h2>{city.name}</h2>
            <img src={city.preview_img} alt="preview card for city" />
          </NavLink>
        </div>
      );
    });
    return body;
  }

  // function that is called onChange of the searchbar value. updates this.state value
  onChangeOfFilterValue(event) {
    this.setState({
      citiesFilter: event.target.value
    });
  }

  render() {
    return (
      <div className="citiesMainDiv">
        <div className="heading">
          <h1>All Cities</h1>

          <input
            type="text"
            className="filterTextBox"
            placeholder="search"
            onChange={this.onChangeOfFilterValue.bind(this)}
          />
        </div>
        <NavLink to="/itineraries/" className="seeAllLink">
          or see all itineraries
        </NavLink>

        {this.citiesBody()}
      </div>
    );
  }
}
//grab cities from redux-store-state and save as params here under this.props.city
const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

//store dispatch actions/methods in props here
const mapDispatchToProps = dispatch => {
  return {
    getCities: () => dispatch(getCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CitiesList));

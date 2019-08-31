import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryActions";

//component for showing lists of itineraries. the itinerary details page is a seperate component named ItineraryDetails

class ItinerariesList extends React.Component {
  componentDidMount() {
    this.props.getItineraries(this.props.match.params.cityName);
  }

  //function that creates styled divs per relevant itinerary
  itinerariesBody() {
    if (this.props.itineraries.length > 1) {
      let body = this.props.itineraries.map(itinerary => {
        return (
          <div key={itinerary._id}>
            <NavLink to={"/itinerary/" + itinerary._id}>
              <h2>{itinerary.title}</h2>
              <img src={itinerary.coverPhoto} alt="cover for itinerary" />
            </NavLink>
          </div>
        );
      });
      return body;
    }
  }

  render() {
    return (
      <div>
        <h1>Itineraries List Dummy</h1>
        <h2>{this.props.match.params.cityName + "'s itineraries:"}</h2>
        {this.itinerariesBody()}
      </div>
    );
  }
}
//grab cities from redux-store-state and save as params here under this.props.itineraries
const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};
//store dispatch actions/methods in props here
const mapDispatchToProps = dispatch => {
  return {
    getItineraries: cityName => dispatch(getItineraries(cityName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItinerariesList));

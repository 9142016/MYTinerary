import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryActions";
import "./css/previewLists.css";

//component for showing lists of itineraries. the itinerary details page is a seperate component named ItineraryDetails

class ItinerariesList extends React.Component {
  constructor() {
    super();
    this.state = {
      itinerariesFilter: ""
    };
  }
  componentDidMount() {
    let param = this.props.match.params.cityName
      ? this.props.match.params.cityName
      : this.props.match.params.category
      ? this.props.match.params.category
      : "";
    this.props.getItineraries(param);
  }
  returnRelevantItineraries() {
    let itineraries = [];
    this.state.itinerariesFilter !== ""
      ? this.props.itineraries.map(itinerary => {
          if (
            itinerary.title
              .toLowerCase()
              .includes(this.state.itinerariesFilter.toLowerCase())
          ) {
            itineraries.push(itinerary);
          }
        })
      : (itineraries = this.props.itineraries);
    return itineraries;
  }

  //function that creates styled divs per relevant itinerary
  itinerariesBody() {
    let relevantitineraries = this.returnRelevantItineraries();
    let body = relevantitineraries.map(itinerary => {
      return (
        <div className="cardbody" key={itinerary._id}>
          <NavLink to={"/itinerary/" + itinerary._id}>
            <h2>{itinerary.title}</h2>

            <img src={itinerary.coverPhoto} alt="cover for itinerary" />
            <span className="itineraryDetailsUnderTitle">
              <h3 className="detail">{itinerary.city}</h3>

              <h3 className="price detail">{itinerary.price}</h3>
              <span className="rating detail">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
              </span>
            </span>
          </NavLink>
        </div>
      );
    });
    return body;
  }

  // function that is called onChange of the searchbar value. updates this.state value
  onChangeOfFilterValue(event) {
    this.setState({
      itinerariesFilter: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="heading">
          {this.props.match.params.cityName ? (
            <h1>{this.props.match.params.cityName}</h1>
          ) : (
            <h1>All Itineraries</h1>
          )}

          <input
            className="filterTextBox"
            type="text"
            placeholder="search"
            onChange={this.onChangeOfFilterValue.bind(this)}
          />
        </div>
        <NavLink to="/cities/" className="seeAllLink">
          see all cities
        </NavLink>
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

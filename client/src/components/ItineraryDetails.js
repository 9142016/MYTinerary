import React from "react";
import { connect } from "react-redux";

// component displaying itinerary details page

class ItineraryDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.itinerary.title}</h1>
        <img
          src={this.props.itinerary.coverPhoto}
          alt="coverphoto for this itinerary"
        />
        <h3>In {this.props.itinerary.city}</h3>
        <p>rating: {this.props.itinerary.rating}</p>
        <p>price: {this.props.itinerary.price}</p>
      </div>
    );
  }
}

// grab cities from redux-store-state and save as params here under this.props.itinerary
const mapStateToProps = (state, ownProps) => {
  return {
    itinerary: state.itineraries.find(
      itinerary => itinerary._id === ownProps.match.params.id
    )
  };
};

export default connect(mapStateToProps)(ItineraryDetails);

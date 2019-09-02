import React from "react";
import { connect } from "react-redux";
import "./css/itineraryDetails.css";

// component displaying itinerary details page

class ItineraryDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="title">
          <h1>{this.props.itinerary.title}</h1>
        </div>
        <img
          src={this.props.itinerary.coverPhoto}
          alt="coverphoto for this itinerary"
        />
        <span className="details">
          <h3>In {this.props.itinerary.city}</h3>
          <p>rating: {this.props.itinerary.rating}</p>
          <p>price: {this.props.itinerary.price}</p>
        </span>

        <div className="activitiesContainer">
          {this.props.itinerary.activities.map((activity, index) => {
            return (
              <div key={index}>
                <h2> • {activity.name}</h2>
                <h3>
                  Cost:{activity.cost}. Duration: {activity.duration} hours.
                </h3>
                <p>{activity.comments}</p>
              </div>
            );
          })}
        </div>
        <div className="commentsSection">
          <h2>Comments</h2>
          <div className="createCommentContainer">
            <input type="text" placeholder="Share your thoughts!" />
            <button>Submit</button>
          </div>
          {this.props.itinerary.comments ? (
            <p>There are comments. </p>
          ) : (
            <p className="noComments">Be the first to comment!</p>
          )}
        </div>
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

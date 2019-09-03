import React from "react";
import { connect } from "react-redux";
import "./css/itineraryDetails.css";
import { addComment } from "../store/actions/itineraryActions";

// component displaying itinerary details page

class ItineraryDetails extends React.Component {
  constructor() {
    super();
    this.state = { comment: "" };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  submitCommentHandler = event => {
    event.preventDefault();
    var timestamp = new Date();
    let ISOtimestamp = timestamp.toISOString();

    // addComment expects (itineraryID, comment, timestamp)
    this.props.addComment(
      this.props.itinerary._id,
      this.state.comment,
      ISOtimestamp
    );
    this.refs.commentBox.value = "";
  };
  myChangeHandler = event => {
    this.setState({ comment: event.target.value });
  };
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
          <form
            className="createCommentForm"
            onSubmit={this.submitCommentHandler}
          >
            <h2>Comments</h2>
            <input
              type="text"
              placeholder="Share your thoughts!"
              onChange={this.myChangeHandler}
              ref="commentBox"
            />
            <input className="submitButton" type="submit" value="Submit" />
          </form>
          {this.props.itinerary.comments ? (
            this.props.itinerary.comments
              .map((comment, index) => {
                return (
                  <div className="comment" key={index}>
                    <img
                      className="anonIcon"
                      src="https://www.shareicon.net/data/256x256/2015/12/10/685310_hat_512x512.png"
                      alt="anonymous poster icon"
                    />
                    <div className="commentContent">
                      {this.props.itinerary.comments.postedBy ? (
                        <h4>poster by a registered user. config!</h4>
                      ) : (
                        <h4>Anonymous</h4>
                      )}
                      <p className="commentContent">{comment.content}</p>
                      <p className="commentDate">
                        {comment.timestamp.split("T")[0]}
                      </p>
                    </div>
                  </div>
                );
              })
              .reverse()
          ) : (
            <p className="noComments">Be the first to comment!</p>
          )}
        </div>
      </div>
    );
  }
}

// grab cities from redux-store-state and save as params here under this.props.itinerary
const mapStateToProps = state => {
  return {
    itineraryID: state.itineraries.currentItineraryID,
    itinerary: state.itineraries.relevantItineraries.find(
      itinerary => itinerary._id === state.itineraries.currentItineraryID
    )
  };
};
//store dispatch actions/methods in props here
const mapDispatchToProps = dispatch => {
  return {
    addComment: (itineraryID, comment, timestamp) =>
      dispatch(addComment(itineraryID, comment, timestamp)),
    saveCurrentItineraryID: id => {
      dispatch({ type: "ADD_CURRENT_ITINERARY_ID", id: id });
    }
  };
};

export default connect(
  mapStateToProps,

  mapDispatchToProps
)(ItineraryDetails);

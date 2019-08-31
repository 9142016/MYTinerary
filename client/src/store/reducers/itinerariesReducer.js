const itinerariesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ITINERARIES":
      return action.payload;
    case "DELETE_ITINERARY":
      let itinsToKeep = state.filter(itinerary => {
        return action._id !== itinerary._id;
      });
      return {
        itinsToKeep
      };
    default:
      return state;
  }
};

export default itinerariesReducer;

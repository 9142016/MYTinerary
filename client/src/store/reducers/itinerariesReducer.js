let initState = {
  currentItineraryID: "",
  relevantItineraries: []
};

const itinerariesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RELEVENT_ITINERARIES":
      return {
        ...state,
        relevantItineraries: action.payload
      };
    case "ADD_CURRENT_ITINERARY_ID":
      return {
        ...state,
        currentItineraryID: action.payload
      };
    case "CHANGE_RELEVANT_ITINERARIES":
      return {
        ...state,
        relevantItineraries: action.payload
      };
    case "UPDATE_ITINERARY":
      return {
        ...state,
        relevantItineraries: state.relevantItineraries.map(itinerary => {
          if (itinerary._id === action.payload.itineraryID) {
            return action.payload.updatedItinerary;
          }
          return itinerary;
        })
      };
    default:
      return state;
  }
};

export default itinerariesReducer;

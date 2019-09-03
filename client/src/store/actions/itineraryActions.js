export function addCurrentItineraryID(id) {
  return {
    type: "ADD_CURRENT_ITINERARY_ID",
    payload: id
  };
}

// async with thunk

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const getRelevantItineraries = (payload, apiRouteParameter) => {
  const ifPayload = payload ? payload : "";
  const ifApiRouteParameter = apiRouteParameter ? apiRouteParameter : "";

  return dispatch => {
    return fetch("/api/itineraries" + ifApiRouteParameter + ifPayload)
      .then(handleErrors)
      .then(res => res.json())
      .then(itineraries => {
        dispatch({
          type: "FETCH_RELEVENT_ITINERARIES",
          payload: itineraries
        });
      });
  };
};

export const addComment = (itineraryID, comment, timestamp) => {
  let commentToSend = {
    content: comment,
    timestamp: timestamp
  };

  return dispatch => {
    return fetch("/api/itineraries/addComment/" + itineraryID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentToSend) // body data type must match "Content-Type" header
    })
      .then(handleErrors)
      .then(response => response.json()) // parses JSON response into native JavaScript objects
      .then(response => {
        dispatch({
          type: "UPDATE_ITINERARY",
          payload: {
            updatedItinerary: response,
            itineraryID: itineraryID
          }
        });
      });
  };
};

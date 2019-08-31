function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const getItineraries = payload => {
  return dispatch => {
    return fetch("/api/itineraries/" + payload)
      .then(handleErrors)
      .then(res => res.json())
      .then(itineraries => {
        dispatch({
          type: "FETCH_ITINERARIES",
          payload: itineraries
        });
      });
  };
};

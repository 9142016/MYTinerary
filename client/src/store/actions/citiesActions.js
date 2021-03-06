function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const getCities = () => {
  return dispatch => {
    return fetch("/api/cities")
      .then(handleErrors)
      .then(res => res.json())
      .then(cities => {
        dispatch({
          type: "FETCH_CITIES",
          payload: cities
        });
      });
  };
};

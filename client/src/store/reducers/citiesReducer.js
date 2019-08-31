const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CITIES":
      return action.payload;
    case "DELETE_CITY":
      let citiesToKeep = state.filter(city => {
        return action._id !== city._id;
      });
      return {
        citiesToKeep
      };
    default:
      return state;
  }
};

export default citiesReducer;

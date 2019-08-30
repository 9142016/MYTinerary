const citiesReducer = (
  state = [
    {
      name: "Barcelona",
      _id: 0,
      preview_img:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2015/09/barcelona-city-big.jpg"
    },
    {
      name: "Amsterdam",
      _id: 1,
      preview_img:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-canal-houses.jpg?itok=rhceR4cw"
    },
    {
      name: "City dummy 1",
      _id: 2,
      preview_img:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2015/09/barcelona-city-big.jpg"
    },
    {
      name: "City dummy 2",
      _id: 3,
      preview_img:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-canal-houses.jpg?itok=rhceR4cw"
    }
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default citiesReducer;

import React from "react";

function ItinerariesList(props) {
  return (
    <div>
      <h1>Itineraries List Dummy</h1>
      <h2>{props.match.params.cityName + "'s itineraries:"}</h2>
    </div>
  );
}

export default ItinerariesList;

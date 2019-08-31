import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import HomeMainButtons from "./components/HomeMainButtons";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import ErrorLink from "./components/ErrorLink";
import Music from "./components/Music";
import Food from "./components/Food";
import Flights from "./components/Flights";
import PublicTransport from "./components/PublicTransport";
import CitiesList from "./components/CitiesList";
import ItinerariesList from "./components/ItinerariesList";
import ItineraryDetails from "./components/ItineraryDetails";
import Separator from "./components/Separator";

class App extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <Navbar />
          <Separator />

          <Switch>
            {/* <Route component={Separator} /> */}
            <Route exact path="/" component={HomeMainButtons} />
            <Route exact path="/cities" component={CitiesList} />
            <Route
              path="/itineraries/:cityName?/:category?"
              component={ItinerariesList}
            />
            <Route path="/itinerary/:id" component={ItineraryDetails} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Profile" component={Profile} />
            <Route path="/music" component={Music} />
            <Route path="/food" component={Food} />
            <Route path="/flights" component={Flights} />
            <Route path="/publicTransport" component={PublicTransport} />
            <Route component={ErrorLink} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

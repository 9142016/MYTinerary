import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./css/homePage.css";

function HomeMainButtons() {
  return (
    <div className="rootStyle">
      <h1>MYtinerary</h1>
      <div className="categoryButtonsContainer">
        <Link to="/music">
          <img src={require("../imgs/icon-music.png")} alt="musicIcon" />
        </Link>
        <Link to="/food">
          <img src={require("../imgs/icon-restaurant.png")} alt="foodIcon" />
        </Link>
        <Link to="/flights">
          <img src={require("../imgs/icon-airplane.png")} alt="airplaneIcon" />
        </Link>
        <Link to="/publicTransport">
          <img src={require("../imgs/icon-bus.png")} alt="busIcon" />
        </Link>
      </div>
      <h3 className="quote">
        Insert fluffy, inspirational, quote so that people spend money here!
      </h3>
      <div className="startContainer">
        <p>Start Browsing</p>

        <Link to="/cities">
          <img
            src={require("../imgs/circled-right-2.png")}
            className="bigButton"
            alt="Start browsing icon"
          />
        </Link>
      </div>
      <div className="buildOwnMessageContainer">
        <p>Want to build your own MYtinerary?</p>
        <div className="buildOwnLinksContainer">
          <Link to="/signIn">Log in</Link>
          <Link to="/signUp"> Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeMainButtons);

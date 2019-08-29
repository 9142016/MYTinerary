import React from "react";
import { Link, withRouter } from "react-router-dom";

function HomeMainButtons() {
  ////////////////////////// CSS /////////////////////////////
  var rootStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  var homeMainButtonsContainer = {
    paddingTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    background:
      "linear-gradient(90deg, rgba(58,103,180,1) 0%, rgba(253,141,29,1) 50%, rgba(252,244,69,0.835171568627451) 100%)"
  };

  var iconStyle = {
    height: "42px",
    width: "42px",
    padding: "20px"
  };
  var bigButtonStyle = {
    height: "150px",
    width: "150px",
    padding: "5px"
  };
  var h3Style = {
    padding: "20px"
  };
  var divFlexColStyle = {
    // alignSelf: "flex-end",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  var divFlexColStyleP = {
    padding: "1rem"
  };

  var divFlexRowStyle = {
    // alignSelf: "flex-end",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  };

  var h4 = {
    padding: "10px"
  };
  //////////////////////// End CSS //////////////////////////

  return (
    <div className="HomeMainButtons-parent" style={rootStyle}>
      <div className="header-parent">
        <h1>MYtinerary</h1>
      </div>

      <div className="four-buttons-parent" style={homeMainButtonsContainer}>
        <Link to="/music">
          <img
            src={require("../imgs/icon-music.png")}
            style={iconStyle}
            alt="musicIcon"
          />
        </Link>
        <Link to="/food">
          <img
            src={require("../imgs/icon-restaurant.png")}
            style={iconStyle}
            alt="foodIcon"
          />
        </Link>
        <Link to="/flights">
          <img
            src={require("../imgs/icon-airplane.png")}
            style={iconStyle}
            alt="airplaneIcon"
          />
        </Link>
        <Link to="/publicTransport">
          <img
            src={require("../imgs/icon-bus.png")}
            style={iconStyle}
            alt="busIcon"
          />
        </Link>
      </div>

      <div className="quote-parent">
        <h3 style={h3Style}>
          Insert fluffy, inspirational, quote so that people spend money here!
        </h3>
      </div>
      <div className="big-button-parent" style={divFlexColStyle}>
        <div style={divFlexColStyleP}>Start Browsing</div>

        <Link to="/cities">
          <img
            src={require("../imgs/circled-right-2.png")}
            style={bigButtonStyle}
            alt="startBrowsingIcon"
          />
        </Link>
      </div>
      <div className="build-own-prompt-parent">
        <h4 style={(divFlexColStyleP, h4)}>
          Want to build your own MYtinerary?
        </h4>
        <div style={divFlexRowStyle}>
          <Link to="/signIn">Log in</Link>
          <Link to="/signUp"> Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeMainButtons);

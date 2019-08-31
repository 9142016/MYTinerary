import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./css/navbar.css";

const Navbar = props => {
  //display icon if user is not on the home page
  let homeLink =
    props.location.pathname !== "/" ? (
      <NavLink to="/">
        <img
          className="iconStyle"
          src={require("../imgs/homeIcon.png")}
          alt="homeIcon"
        />
      </NavLink>
    ) : null;

  // profile/sign in img + link
  // link changes depending on value of redux-state isSignedIn
  let signInOrProfileRedirect = props.isSignedIn ? (
    <NavLink to="/profile">
      {" "}
      <img
        className="iconStyle"
        src={require("../imgs/user.png")}
        alt="profileIcon"
      />
    </NavLink>
  ) : (
    <NavLink to="/signIn">
      {" "}
      <img
        className="iconStyle"
        src={require("../imgs/user.png")}
        alt="profileIcon"
      />
    </NavLink>
  );

  // returns a different className/style depending on current link path
  let classNameValue =
    props.location.pathname === "/"
      ? "navbar-maindiv-white"
      : "navbar-maindiv-colored";

  return (
    <div className={classNameValue}>
      <span>{homeLink}</span>
      <span>{signInOrProfileRedirect}</span>
    </div>
  );
};

//grab cities from redux-store-state and save as params here under this.props.city
const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));

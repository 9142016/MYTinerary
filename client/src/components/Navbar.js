import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  //home icon and link
  let homeLink =
    props.location.pathname !== "/" ? (
      <NavLink to="/">
        <img
          src={require("../imgs/homeIcon.png")}
          style={iconStyle}
          alt="homeIcon"
        />
      </NavLink>
    ) : null;

  return (
    <div className="navbar-parent-div" style={divFlexboxRow}>
      {homeLink}
    </div>
  );
};

export default withRouter(Navbar);

////////////////////////// CSS /////////////////////////////
let divFlexboxRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

let iconStyle = {
  height: "42px",
  width: "42px",
  padding: "20px"
};
//////////////////////// End CSS //////////////////////////

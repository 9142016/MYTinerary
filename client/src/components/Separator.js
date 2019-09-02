import React from "react";
import { withRouter } from "react-router-dom";

const Separator = props => {
  return (
    <div
      style={
        props.location.pathname === "/" ? { height: "1px" } : { height: "70px" }
      }
    ></div>
  );
};

export default withRouter(Separator);

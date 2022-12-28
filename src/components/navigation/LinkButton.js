import React, { useState } from "react";
import { Link } from "react-router-dom";

const LinkButton = ({route, children }) => {
  return <Link to={route} style={{ color: "white" }}>{children}</Link>;
};

export default LinkButton;

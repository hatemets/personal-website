import React from "react";

export const NavItem = props => {
  // const { location } = props;
  const location = "/";

  return (
    <li>
      <Link to={location}>Home</Link>
    </li>
  );
};

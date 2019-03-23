import React from "react";
import { NavLink } from "react-router-dom";

function NotSignedSidenav(props) {
  return (
    <ul className="sidenav" id="mobile-links" ref={props.sideNav}>
      <li>
        <NavLink className="" to="/signin">
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/register">
          Sign up
        </NavLink>
      </li>
    </ul>
  );
}

export default NotSignedSidenav;

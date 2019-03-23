import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/userAction";

function SignedInSidenav(props) {
  return (
    <ul className="sidenav" id="mobile-links" ref={props.sideNav}>
      <li>
        <NavLink className="" to="/chatroom">
          Chat Room
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/developerslist">
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/myprofile">
          My Profile
        </NavLink>
      </li>
      <li>
        <button
          className="btn btn-small waves-effect"
          onClick={() => props.logoutUser()}
        >
          Logout
        </button>
      </li>
    </ul>
  );
}

export default connect(
  null,
  { logoutUser }
)(SignedInSidenav);

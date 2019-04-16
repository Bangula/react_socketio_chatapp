import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/userAction";
import PropTypes from "prop-types";

function SignedInLinks(props) {
  return (
    <ul className="right hide-on-med-and-down">
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

SignedInLinks.propTypes = {
  logoutUser: PropTypes.func
};

export default connect(
  null,
  { logoutUser }
)(SignedInLinks);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.js";

import SignedInLinks from "./SignedInLinks";
import NotSignedInLinks from "./NotSignedInLinks";

class Navbar extends Component {
  sideNav = React.createRef();

  componentDidMount() {
    //Initialize mobile nav functionality
    M.Sidenav.init(this.sideNav.current, {
      closeOnClick: true
    });
  }
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper blue-grey darken-4">
            <div className="container">
              <NavLink to="/" className="brand-logo">
                BV
              </NavLink>
              <a
                href="/"
                className="sidenav-trigger"
                data-target="mobile-links"
              >
                <i className="material-icons">menu</i>
              </a>

              {this.props.isAuthenticated ? (
                <SignedInLinks />
              ) : (
                <NotSignedInLinks />
              )}
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-links" ref={this.sideNav}>
          <li className="center">
            <span>Logo</span>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">My Work</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Navbar);

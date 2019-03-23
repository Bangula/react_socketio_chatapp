import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { registerUser } from "../../store/actions/userAction";
import { clearErrors } from "../../store/actions/userAction";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state, this.props.history);
  };
  clearInputErrors = () => {
    this.props.clearErrors();
  };

  render() {
    return (
      <div className="container">
        <div className="register-form z-depth-3">
          <h3 className="center-align">Sign Up</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                onClick={this.clearInputErrors}
              />
              {this.props.errors.name ? (
                <span className="helper-text center-align red-text">
                  {this.props.errors.name}
                </span>
              ) : null}
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                onClick={this.clearInputErrors}
              />

              {this.props.errors.email ? (
                <span className="helper-text center-align red-text">
                  {this.props.errors.email}
                </span>
              ) : null}
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                onClick={this.clearInputErrors}
              />
              {this.props.errors.password ? (
                <span className="helper-text center-align red-text">
                  {this.props.errors.password}
                </span>
              ) : null}
            </div>
            <div className="input-field">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                id="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                onClick={this.clearInputErrors}
              />
              {this.props.errors.password2 ? (
                <span className="helper-text center-align red-text">
                  {this.props.errors.password2}
                </span>
              ) : null}
            </div>
            <button className="btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(Register);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../store/actions/userAction";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="register-form z-depth-3">
          <h3 className="center-align">Log in</h3>
          <form onSubmit={this.handleSubmit}>
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

            <button className="btn" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateTpProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateTpProps,
  { loginUser }
)(Login);

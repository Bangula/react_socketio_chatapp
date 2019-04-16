import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import store from "./store/store";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./store/actions/userAction";
import { logoutUser } from "./store/actions/userAction";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layouts/navbar/Navbar";
import Chatroom from "./components/chatroom/Chatroom";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/signin";
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={Login} />
          <Route path="/chatroom" component={Chatroom} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

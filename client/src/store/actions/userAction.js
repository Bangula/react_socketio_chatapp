import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const registerUser = user => {
  return (dispatch, getState) => {
    axios
      .post("/api/users/register", user)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  };
};

export const loginUser = user => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_ERRORS"
    });
    axios
      .post("/api/users/signin", user)
      .then(res => {
        const { token } = res.data;
        const decoded = jwt_decode(token);
        localStorage.setItem("jwtToken", token);
        dispatch({
          type: "SET_CURRENT_USER",
          payload: decoded
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  };
};

export const setCurrentUser = user => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: user
    });
  };
};

export const clearErrors = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_ERRORS"
    });
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch({
      type: "SET_CURRENT_USER",
      payload: {}
    });
  };
};

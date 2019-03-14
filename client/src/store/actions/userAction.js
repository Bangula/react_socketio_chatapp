import axios from 'axios';

export const registerUser = (user) => {
    return (dispatch, getState) => {
        axios
          .post('http://localhost:5000/api/users/register', user)
          .then(res => {
              console.log(res.data);
              dispatch({
                  type: "SIGNUP_SUCCESS",
                  payload: res.data
              })
          })
          .catch(err => {
              console.log(err.response.data);
              dispatch({
                  type: "GET_ERRORS",
                  payload: err.response.data
              })
          })
    }
};

export const clearErrors = () => {
    return (dispatch, getState) => {
        dispatch({
            type: "CLEAR_ERRORS"
        })
    }
};
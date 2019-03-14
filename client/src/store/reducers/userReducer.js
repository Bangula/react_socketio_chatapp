const initialState = {
    userAuth: false,
    user: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case "SIGNUP_SUCCESS":
          console.log('Sign up success');
          return state;
        default:
          return state;
    }   
};


import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errors from './errorReducer';

export default combineReducers({
    user: userReducer,
    errors 
});


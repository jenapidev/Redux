// Redux
import { combineReducers } from 'redux';
// Reducers
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer"; 
import assignmentsReducer from "./assignmentsReducer";

export default combineReducers({
    usersReducer,
    postsReducer,
    assignmentsReducer 
});
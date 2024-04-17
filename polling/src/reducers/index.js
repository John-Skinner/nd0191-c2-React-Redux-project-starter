import {combineReducers} from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import {loadingBarReducer} from "react-redux-loading-bar";
import users from './users';
import poll from './poll'
export default combineReducers({
    authedUser,
    questions,
    users,
    loadingBar:loadingBarReducer
})

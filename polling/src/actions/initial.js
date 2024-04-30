
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./receiveUsers";
import {receiveQuestions} from "./receiveQuestions";


export function initialData(id, pw) {
    // return a function to trigger use of thunk middleware
    return (dispatch)=>{
        dispatch(showLoading());
        return getInitialData().then(({users,questions})=>{
            // we have users check and dispatch (dispatch will check password
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading())
        })
    }
}

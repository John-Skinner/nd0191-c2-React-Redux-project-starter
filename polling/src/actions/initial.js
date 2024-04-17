
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./receiveUsers";
import {receiveQuestions} from "./receiveQuestions";


export function initialData(id, pw) {
    // return a function to trigger use of thunk middleware
    return (dispatch)=>{
        console.log(`Login preparation`);
        dispatch(showLoading());
        return getInitialData().then(({users,questions})=>{
            console.log(`initial resolve questions:${JSON.stringify(questions,null,2)}`)
            // we have users check and dispatch (dispatch will check password
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading())
        })
    }
}

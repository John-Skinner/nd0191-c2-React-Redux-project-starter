import {hideLoading, showLoading} from "react-redux-loading-bar";
import {saveQuestionAnswer} from "../utils/api";
import { updateQuestion} from "./receiveQuestions";

export const RECEIVE_USERS="RECEIVE_USERS";
export const UPDATE_USER="UPDATE_USER";
export const UPDATE_USER_ANSWER="UPDATE_USER_ANSWER";
export function receiveUsers(users) {
    return {
        type:RECEIVE_USERS,
        users
    }
}
export function updateUser(user,pollQuestion) {
    return {
        type:UPDATE_USER,
        user,
        pollQuestion
    }
}
export function updateUserAnswer(user) {
    console.log(`updating store's user:${JSON.stringify(user,null,2)}`);
    return {
        type:UPDATE_USER_ANSWER,
        user,
    }
}
export function saveUserAnswerToDB(authedUser, qid, answer) {
    console.log('start saveUserAnswer');
    return (dispatch) => {
        console.log('saveUserAnswer ',authedUser);
        dispatch(showLoading());
        return saveQuestionAnswer({authedUser, qid, answer}).then((result)=>{
            console.log('saveUserAnswer done');
            dispatch(updateUserAnswer(result.users[authedUser]));
            dispatch(updateQuestion(result.questions[qid]));
            dispatch(hideLoading());
        });
    }
}


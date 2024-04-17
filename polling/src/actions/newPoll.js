import {hideLoading, showLoading} from "react-redux-loading-bar";
import {saveQuestion} from "../utils/api";
import {receiveNewPoll} from "./receiveNewPoll";
import {receiveQuestions} from "./receiveQuestions";
import {updateUser} from "./receiveUsers";


export function newPoll(option1,option2,author) {
    // return a function to trigger use of thunk middleware
    return (dispatch)=>{
        console.log(`new option prepare`);
        dispatch(showLoading());
        let newQuestion = {
            optionOneText:option1,
            optionTwoText:option2,
            author
        }
        return saveQuestion(newQuestion).then((formattedQuestion)=>{
            console.log(`new question:${JSON.stringify(formattedQuestion,null,2)}`);
            dispatch(hideLoading());
            let newQuestionObj = {

            };
            newQuestionObj[formattedQuestion.id] = formattedQuestion;
            console.log(`new q list:${JSON.stringify(newQuestionObj,null,2)}`);
            let author=formattedQuestion.author;

            dispatch(receiveQuestions(newQuestionObj));
            dispatch(updateUser(author,formattedQuestion.id))
         //   dispatch(receiveNewPoll(formattedQuestion));

            // we have users check and dispatch (dispatch will check password

            // fixme to add dispatch that adds the formattedQuestion to the questions object
            // plus update the user that authored it.

        })
    }
}

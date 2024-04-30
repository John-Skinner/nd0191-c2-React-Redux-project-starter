import {hideLoading, showLoading} from "react-redux-loading-bar";
import {saveQuestion} from "../utils/api";
import {receiveNewPoll} from "./receiveNewPoll";
import {receiveQuestions} from "./receiveQuestions";
import {updateUser} from "./receiveUsers";


export function newPoll(option1,option2,author) {
    // return a function to trigger use of thunk middleware
    return (dispatch)=>{

        dispatch(showLoading());
        let newQuestion = {
            optionOneText:option1,
            optionTwoText:option2,
            author
        }
        return saveQuestion(newQuestion).then((formattedQuestion)=>{
            dispatch(hideLoading());
            let newQuestionObj = {

            };
            newQuestionObj[formattedQuestion.id] = formattedQuestion;
            let author=formattedQuestion.author;

            dispatch(receiveQuestions(newQuestionObj));
            dispatch(updateUser(author,formattedQuestion.id))

        })
    }
}

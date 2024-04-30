import {RECEIVE_QUESTIONS, UPDATE_QUESTION} from "../actions/receiveQuestions";
export default function questions(state={},action) {
    switch(action.type)
    {
        case RECEIVE_QUESTIONS:
            let newState = {
                ...state,
                ...action.questions
            }
            return newState;
        case UPDATE_QUESTION:
        {
            let newState = {
                ...state,
            }
            newState[action.question.id] = {...action.question};
            return newState;
        }
        default:
            return state;
    }
}

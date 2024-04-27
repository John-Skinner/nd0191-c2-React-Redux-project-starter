import {RECEIVE_QUESTIONS, UPDATE_QUESTION} from "../actions/receiveQuestions";
export default function questions(state={},action) {
    switch(action.type)
    {
        case RECEIVE_QUESTIONS:
            let newState = {
                ...state,
                ...action.questions
            }
            console.log(`questionsReducer:${JSON.stringify(newState,null,2)}`)
            return newState;
        case UPDATE_QUESTION:
        {
            let newState = {
                ...state,
            }
            newState[action.question.id] = {...action.question};
            console.log(`new question state:${JSON.stringify(newState,null,2)}`);
            return newState;
        }
        default:
            return state;
    }
}

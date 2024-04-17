import {RECEIVE_QUESTIONS} from "../actions/receiveQuestions";
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
        default:
            return state;
    }
}

import {RECEIVE_NEWPOLL} from "../actions/receiveNewPoll";
export default function poll(state={},action) {
    switch(action.type)
    {
        case RECEIVE_NEWPOLL:
            let newState = {
                ...state,
                ...action.question
            }
            return newState;
        default:
            return state;
    }
}

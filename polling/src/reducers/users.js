import {RECEIVE_USERS, UPDATE_USER} from "../actions/receiveUsers";

export default function users(state = {}, action)
{
    switch (action.type)
    {
        case RECEIVE_USERS:
            console.log(`receive users action content in:${JSON.stringify(action, null, 2)}`);
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER:
            console.log(`update user with new poll question ${JSON.stringify(action, null, 2)}`);
            let newState = {
                ...state
            }
            let thisUserInfo = {...newState[action.user]};
            let userQuestions = [...thisUserInfo.questions];
            userQuestions.push(action.pollQuestion);
            newState[action.user] = thisUserInfo;
            newState[action.user].questions = userQuestions;
            return newState;

        default:
            return state;
    }
}

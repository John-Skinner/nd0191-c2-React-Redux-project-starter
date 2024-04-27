import {RECEIVE_USERS, UPDATE_USER, UPDATE_USER_ANSWER} from "../actions/receiveUsers";
import {_saveQuestionAnswer} from "../_DATA";


export default   function users(state = {}, action)
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

        case UPDATE_USER_ANSWER:
        {
            console.log(`update user answer authedUser:${JSON.stringify(action.user,null,2)}`);
            console.log(`update user answer user:${JSON.stringify(action.user,null,2)}`);
            let newState = {
                ...state,
            }
            newState[action.user.id] = {...action.user};
            console.log(`new state:${JSON.stringify(newState,null,2)}`);
            return newState;
        }


        default:
            return state;
    }
}

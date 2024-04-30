import {RECEIVE_USERS, UPDATE_USER, UPDATE_USER_ANSWER} from "../actions/receiveUsers";
import {_saveQuestionAnswer} from "../_DATA";


export default   function users(state = {}, action)
{
    switch (action.type)
    {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER:
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

            let newState = {
                ...state,
            }
            newState[action.user.id] = {...action.user};
            return newState;
        }


        default:
            return state;
    }
}

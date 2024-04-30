import {LOGOUT_USER} from "../actions/logout";


export default function logout(state = {}, action)
{

    switch (action.type)
    {
        case LOGOUT_USER:

            let newState = {};
            if (state)
            {
                newState = {
                    ...state,
                }
                delete newState.authedUser;
            }
            return newState;
        default:
            return state;
    }
}

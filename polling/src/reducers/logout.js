import {LOGOUT_USER} from "../actions/logout";


export default function logout(state = {}, action)
{

    switch (action.type)
    {
        case LOGOUT_USER:
            console.log(`receive logout:${JSON.stringify(action, null, 2)}`);
            let newState = {};
            if (state)
            {
                newState = {
                    ...state,
                }
                delete newState.authedUser;
            }
            console.log(`new state:${JSON.stringify(newState,null,2)}`);
            return newState;
        default:
            return state;
    }
}

import {SET_AUTHED_USER} from "../actions/authedUser";
import {LOGOUT_USER} from "../actions/logout";
export default function authedUser(state=null,action) {
    if (action.type === SET_AUTHED_USER)
    {
        console.log(`authedReducer type:${action.type}`);
        console.log(`authedUser id:${action.id}`)
        console.dir(action);
        console.log(`State in for authedReducer: ${JSON.stringify(state, null, 2)}`);
    }
    let newState = {};
    switch(action.type) {
        case SET_AUTHED_USER:


            if (state) {
                newState = {
                    ...state,
                    authedUser:action.id
                }

            }
            else
            {
                console.log(`state is null`);
                newState = {
                    authedUser: action.id
                }
            }
            console.log(`new from authedUser reducer:${JSON.stringify(newState,null,2)}`);
            return newState;
        case LOGOUT_USER:
            if (state) {
                newState = {
                    ...state,
                    authedUser:null
                }

            }
            else
            {
                console.log(`state is null`);
                newState = {
                    authedUser: null
                }
            }
            console.log(`logout state:${newState}`)
            return newState;


        default:
            return state;
    }
}

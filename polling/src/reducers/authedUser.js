import {SET_AUTHED_USER} from "../actions/authedUser";
import {LOGOUT_USER} from "../actions/logout";
export default function authedUser(state=null,action) {

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
            return newState;


        default:
            return state;
    }
}

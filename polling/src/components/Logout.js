import {checkedLoggedIn} from "../utils/assureLoggedIn";
import {connect} from "react-redux";
import {logout} from "../actions/logout";

const Logout = (props) => {
    let isLoggedIn = checkedLoggedIn(props);
    if (isLoggedIn) {
        const id=props.authedUser.authedUser;
        let item=props.users[id];
        const logMeOut = (e)=>{
            props.dispatch(logout());
        }
        return (
        <div>
            <img src={item.avatarURL} alt='pic' height='64' width='64'/>
            User:{item.name}
            <button onClick={logMeOut}>Log Out</button>
        </div>
        )
    } else
    {
        return (
            <div></div>
        )
    }
}
function mapStateToProps(props) {
    const {users,authedUser} = props;
    return {
        authedUser:authedUser,
        users
    }
}
export default connect(mapStateToProps)(Logout);

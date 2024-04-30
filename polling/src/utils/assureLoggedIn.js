import PollsList from "../components/PollsList";
import Login from "../components/Login";

const checkedLoggedIn = (props) =>
{
    let loggedIn = false;
    if (props.authedUser !== undefined)
    {
        if (props.authedUser !== null)
        {
            if (props.authedUser.authedUser !== null) {
                loggedIn = true;
            }
        }
    }
    return loggedIn;
}
const getLoggedInTree = () =>
{
    return (
        <div>
            <Login/>
        </div>
    )
}
const getLoginProps = (props) => {
    let {users, authedUser} = props;
    let listOfUsers = [];

    for (let id in users)
    {
        listOfUsers.push(id);
    }

    return {
        authedUser,
        listOfUsers,
        users
    }
}
export {
    checkedLoggedIn,
    getLoggedInTree,
    getLoginProps
}

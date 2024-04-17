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
    console.log(`isLoggedIn:${loggedIn}`);
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
    console.log(`number of users:${Object.keys(users).length}`)
    console.log(`authedUser:${JSON.stringify(authedUser, null, 2)}`);
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

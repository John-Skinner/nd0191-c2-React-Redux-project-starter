import {connect} from "react-redux";
import {getLoggedInTree,checkedLoggedIn} from "../utils/assureLoggedIn";

const Leaderboard = (props)=> {
    let {leaderList} = props;
    console.log(`leaderList:${leaderList}`);
    console.dir(props);
    const isLoggedIn = checkedLoggedIn(props);
    if (!isLoggedIn) {
        return getLoggedInTree(props);
    }
    else
    {
        return (
            <div>
                <h2> Leaderboard</h2>
                <table>
                    {leaderList.map((item) =>
                    {
                        return (
                            <tr>
                                <td>
                                    <img src={item.avatarURL} alt='pic' height='64' width='64'/>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    Asked:{item.numAsked}
                                </td>
                                <td>
                                    Answered:{item.numAnswered}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }


}
function mapStateToProps(props) {
    const {users,authedUser} = props;
    let leaderList = [];
    for (let id in users)
    {
        let numAnswered = Object.keys(users[id].answers).length;
        let leaderItem = {
            id:id,
            name:users[id].name,
            avatarURL:users[id].avatarURL,
            numAsked:users[id].questions.length,
            numAnswered
        }
        leaderList.push(leaderItem);
    }
    leaderList.sort((a,b)=> {
        return (b.numAsked+b.numAnswered) - (a.numAsked+a.numAnswered);
    })
    return {
        leaderList,
        authedUser:authedUser
    }

}
export default connect(mapStateToProps)(Leaderboard);

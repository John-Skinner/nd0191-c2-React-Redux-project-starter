import {connect} from "react-redux";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {acceptUser} from "../actions/authedUser";
import {useNavigate} from "react-router-dom";

import {receiveQuestions} from "../actions/receiveQuestions";
import PollHeadline from "./PollHeadline";


const Login = (props) =>
{
    const nav = useNavigate();
    const [pw, setPw] = useState('');
    const [userMessage, setUserMessage] = useState('Select user id and enter password');

    let ps = useLocation();
    let wasRoutedByNavigator = false;
    if (ps.state)
    {
        wasRoutedByNavigator = ps.state.cameFromNav;
    }

    console.log(`authedUser?${props.authedUser}`);
    console.log(`was navigated to here:${wasRoutedByNavigator}`);


    console.log('Login Component render start');

    if (props.listOfUsers)
    {
        props.listOfUsers.forEach((id) =>
        {
            console.log(`user:${id}`)
        })
    } else
    {
        console.error('No Users loaded yet')
    }
    const choseUser = (e) =>
    {
        console.log(`chose user:${e.target.value}`)
    }
    const checkUserPW = (e) =>
    {
        let selectElement = document.getElementById('useridID');
        console.log(`selected user:${selectElement.value}`);
        let selectedUser = selectElement.value;
        let matchingPW = props.users[selectedUser].password;
        e.preventDefault();
        console.error(`check password on ${pw} to match ${matchingPW}`);
        if (pw === matchingPW)
        {
            console.log(`matched!`);
            props.dispatch(receiveQuestions())
            props.dispatch(acceptUser(selectedUser));
        } else
        {
            setUserMessage('password invalid; try again.  Also select user id')
        }
        setPw('');


    }
    const capturePW = (e) =>
    {
        e.preventDefault();
        console.log(`pw value:${e.target.value}`);
        setPw(e.target.value);
    }


    return (
        props.listOfUsers ? (
            <div className='container'>
                <h2>
                    {userMessage}
                </h2>
                <div>
                    <select name='userid' id='useridID' onChange={choseUser}>
                        {
                            props.listOfUsers.map((id) =>
                                {
                                    let pw = props.users[id].password;
                                    let idAndPW = id + '(' + pw + ')';
                                    return (
                                        <option value={id} key={id}>
                                            {idAndPW}
                                        </option>
                                    )
                                }
                            )
                        }

                    </select>
                    <input type='text' id='pwText' value={pw} onChange={capturePW}/>
                    <button className='pwButtonClass' onClick={checkUserPW}>Submit</button>
                </div>

            </div>
        ) : (
            <div>
                <h2> ...</h2>
            </div>
        )


    )
}
const mapStateToProps = (props, ownProps) =>
{
    console.log('Login mapStateToProps:');
    console.dir(props);
    let {users, authedUser} = props;
    let {cameFromNav} = ownProps;
    console.log(`number of users:${Object.keys(users).length}`)
    console.log(`came from nav:${cameFromNav}`)
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
export default connect(mapStateToProps)(Login);

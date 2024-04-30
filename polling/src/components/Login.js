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



    const checkUserPW = (e) =>
    {
        let selectElement = document.getElementById('useridID');
        let selectedUser = selectElement.value;
        let matchingPW = props.users[selectedUser].password;
        e.preventDefault();
        if (pw === matchingPW)
        {

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
        setPw(e.target.value);
    }


    return (
        props.listOfUsers ? (
            <div className='container'>
                <h2>
                    {userMessage}
                </h2>
                <div>
                    <select name='userid' id='useridID'>
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
                    <input type='text' id='pwText' data-testid='pwInput' value={pw} onChange={capturePW}/>
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

    let {users, authedUser} = props;
    let {cameFromNav} = ownProps;

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

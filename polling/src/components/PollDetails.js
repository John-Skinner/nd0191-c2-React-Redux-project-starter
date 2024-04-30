import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {checkedLoggedIn, getLoggedInTree} from "../utils/assureLoggedIn";
import {saveUserAnswerToDB} from "../actions/receiveUsers";
import Page404 from "./Page404";
// this is helper function for routing/navigation
const withRouter = (Component) =>
{
    const ComponentWithRouterProp = (props) =>
    {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>
    };
    return ComponentWithRouterProp;
}
const PollDetails = (props) =>
{
    let loggedIn = checkedLoggedIn(props);
    if (!loggedIn)
    {
        return getLoggedInTree();
    }
    let {authedUser, id, questions, thisUser, authorUserData} = props;
    if (authorUserData === null) {
        return (<Page404/>)
    }
    let alreadyAnswered = thisUser.answers[id];
    let myAnswer = '';
    if (alreadyAnswered)
    {
        console.log(`Already Answered:${alreadyAnswered}`);
        myAnswer = questions[id][alreadyAnswered].text;
    }
    const selectOne = () =>
    {
        props.dispatch(saveUserAnswerToDB(authedUser.authedUser, id, 'optionOne'));
    }
    const selectTwo = () =>
    {
        props.dispatch(saveUserAnswerToDB(authedUser.authedUser, id, 'optionTwo'));
    }
    let q1 = props.questions[id].optionOne.text;
    let q2 = props.questions[id].optionTwo.text;
    let questionAvatar = props.authorUserData.avatarURL;

    let numQ1 = props.questions[id].optionOne.votes.length;
    let numQ2 = props.questions[id].optionTwo.votes.length;
    let pcntQ1 = numQ1 / (numQ1 + numQ2);
    let pcntQ2 = numQ2 / (numQ1 + numQ2);
    let pcntQ1Str = Math.round(pcntQ1 * 100).toString(10) + '%';
    let pcntQ2Str = Math.round(pcntQ2 * 100).toString(10) + '%';
    if (alreadyAnswered)
    {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td> {q1}</td>
                        <td> {numQ1}</td>
                        <td> {pcntQ1Str}</td>
                    </tr>
                    <tr>
                        <td>{q2}</td>
                        <td>{numQ2}</td>
                        <td>{pcntQ2Str}</td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    My Answer was: {myAnswer}
                </div>
            </div>

        )
    } else
    {

        return (
            <div>

                <div className='centeredItem'>
                    <p className='centeredDitem'>
                        <img src={questionAvatar} alt='pic' height='64' width='64'/>
                    </p>
                    <p className='centeredDitem'>
                        Would you Rather
                    </p>


                </div>


                <div>
                    <ol>
                        <li>
                            <button onClick={selectOne}> {q1}</button>
                        </li>
                        <li>
                            <button onClick={selectTwo}> {q2}</button>
                        </li>
                    </ol>
                </div>
            </div>

        )
    }


}


function mapStateToProps(props, ownProps)
{
    const {authedUser, questions, users} = props;
    const {id} = ownProps.router.params;
    if (authedUser === null)
    {
        return {}
    }
    if (authedUser.authedUser === null) {
        return {}
    }
    let authorUserData = null
    if (questions[id]) {
        let questionAuthorName = questions[id].author;
        authorUserData = users[questionAuthorName];
    }
    if (authorUserData === null) {
        console.error('404');
    }


    const isLoggedIn = checkedLoggedIn(props);
    if (isLoggedIn)
    {
        let thisUser = users[authedUser.authedUser];
        return {
            questions,
            authedUser,
            id,
            thisUser,
            authorUserData,
        }
    } else
    {
        return {
            authedUser
        }
    }

}

export default withRouter(connect(mapStateToProps)(PollDetails));

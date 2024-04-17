import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {checkedLoggedIn, getLoggedInTree} from "../utils/assureLoggedIn";
// this is helper function for routing/navigation
const withRouter = (Component)=> {
    const ComponentWithRouterProp = (props) => {
        let location=useLocation();
        let navigate=useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}} />
    };
    return ComponentWithRouterProp;
}
const PollDetails = (props)=>{
    console.log(`PollDetails props:${JSON.stringify(props,null,2)}`);
    let loggedIn = checkedLoggedIn(props);
    if (!loggedIn) {
        return getLoggedInTree();
    }
    let {authedUser,id,questions,thisUser} = props;
    let alreadyAnswered = thisUser.answers[id];
    const selectOne = (e)=>{
        console.log(`Selected one:` )
    }
    const selectTwo = (e) => {
        console.log(`Selected two`);
    }
    let q1 = props.questions[id].optionOne.text;
    let q2 = props.questions[id].optionTwo.text;
    let numQ1 = props.questions[id].optionOne.votes.length;
    let numQ2 = props.questions[id].optionTwo.votes.length;

        if (alreadyAnswered)
        {
            return (
                <div>
                    <table>
                        <tr>
                            <td> {q1}</td>
                            <td> {numQ1}</td>
                        </tr>
                        <tr>
                            <td>{q2}</td>
                            <td>{numQ2}</td>
                        </tr>
                    </table>
                </div>

            )
        } else
        {

            return (
                <div>
                    Would you Rather
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
function mapStateToProps(props,ownProps) {
    const {authedUser,questions,users} = props;
    const {id} = ownProps.router.params;
    console.log(`mapStateToProps Details authedUser:${authedUser} id:${id}`);
    const isLoggedIn = checkedLoggedIn(props);
    if (isLoggedIn) {
        let thisUser=users[authedUser.authedUser];
        return {
            questions,
            authedUser,
            id,
            thisUser
        }
    }
    else {
        return {
            authedUser
        }
    }

}
export default withRouter(connect(mapStateToProps)(PollDetails));

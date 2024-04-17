import PollsList from "./PollsList";
import {connect} from "react-redux";
import PollHeadline from "./PollHeadline";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Login from "./Login";
import {checkedLoggedIn, getLoggedInTree} from "../utils/assureLoggedIn";

const Home = (props) => {
    const navigate = useNavigate();
    useEffect(() =>
    {

    }, []);
    let ps = useLocation();
    let wasRoutedByNavigator = false;
    if (ps.state) {
        wasRoutedByNavigator = ps.state.cameFromNav;
    }
    console.log(`wasRoutedByNavigator from Home:${wasRoutedByNavigator}`);
    //if (!props.authedUser) {
    //    navigate('/login');
    //    return (<div></div>)
    //}
    let loggedIn = checkedLoggedIn(props);

    if (loggedIn) {
        return (
            <div> Home
                <div>
                    <div>
                        <h2>New Questions</h2>
                    </div>
                    <PollsList questionType='new'/>
                </div>
                <div>
                    <div>
                        <h2>Done</h2>
                    </div>
                    <PollsList questionType='answered'/>
                </div>
            </div>
        )
    }
    else {
        return getLoggedInTree();
    }


}
function mapStateToProps(props) {
    console.dir(props);
    const {authedUser,questions} = props;
    let mapped = {
        authedUser:authedUser,
        questions:questions
    }
    return mapped;
}
export default connect(mapStateToProps)(Home);

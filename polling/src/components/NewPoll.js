import {useState} from "react";
import {checkedLoggedIn, getLoggedInTree, getLoginProps} from "../utils/assureLoggedIn";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {newPoll} from "../actions/newPoll";

const NewPoll = (props)=>{
    const [option1Text,setOption1Text] = useState('')
    const [option2Text,setOption2Text] = useState('');
    const nav = useNavigate();
    const createNewPoll = (e) => {
        e.preventDefault();
        console.error('collecting options');

        nav('/');
        props.dispatch(newPoll(option1Text,option2Text,props.authedUser.authedUser));

    }
    const option1Updated = (e)=>{
        e.preventDefault();
        setOption1Text(e.target.value);
    }
    const option2Updated = (e) => {
        e.preventDefault();
        setOption2Text(e.target.value);
    }
    const isLoggedIn = checkedLoggedIn(props);
    if (!isLoggedIn) {
        return getLoggedInTree(props);
    }
    return (
        <div>
            <h2 className='centerHeading'> Would You Rather</h2>
            <h5 className='centerHeading'> Create your Own Poll</h5>

            <div >
                <h3> First Option</h3>
                <input id='opt1' type='text' value={option1Text} onChange={option1Updated} placeholder='Option One'/>
                <h3> Second Option</h3>
                <input id='opt2' type='text' value={option2Text} onChange={option2Updated} placeholder='Option Two'/>
                <button onClick={createNewPoll} className='btn'>Submit</button>
            </div>
        </div>
    )
}

function mapStateToProps(props) {
    let newProps = {};
    let loginProps = getLoginProps(props);
    return Object.assign(newProps, loginProps);

}

export default connect(mapStateToProps)(NewPoll);

import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const PollHeadline = (props) => {
    let {id,question} = props;
    let nav = useNavigate();
    const goToPoll = (e)=>{
        let newUrl = '/questions/' + id;
        nav(newUrl);
    }
    return (
        <div>
            Author: {props.question.author}
            Published: {props.question.timestamp}
            <button onClick={goToPoll}>Show</button>
        </div>
    )
}
function mapStateToProps(state,ownProps) {

    const {questionId,questionType} = ownProps;
    const question = state.questions[questionId];
    if (!question) {
        console.error(`question ref not found:${questionId}`);
    }

    console.log(`question id:${questionId}`);
    let mapped = {
        id:questionId,
        question:question,
        questionType
    };
    return mapped

}
export default connect(mapStateToProps)(PollHeadline);

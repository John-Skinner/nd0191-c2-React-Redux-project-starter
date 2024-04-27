import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const PollHeadline = (props) =>
{
    let {id, question} = props;
    let nav = useNavigate();
    let formattedDateTime = new Date(props.question.timestamp).toLocaleString();
    const goToPoll = (e) =>
    {
        let newUrl = '/questions/' + id;
        nav(newUrl);
    }
    return (
        <tr>
            <td>
                {props.question.author}
            </td>
            <td>
                {formattedDateTime}
            </td>
            <td>
                <button onClick={goToPoll}>Show</button>
            </td>
        </tr>
    )
}

function mapStateToProps(state, ownProps)
{

    const {questionId, questionType} = ownProps;
    const question = state.questions[questionId];
    if (!question)
    {
        console.error(`question ref not found:${questionId}`);
    }

    console.log(`question id:${questionId}`);
    let mapped = {
        id: questionId,
        question: question,
        questionType
    };
    return mapped

}

export default connect(mapStateToProps)(PollHeadline);

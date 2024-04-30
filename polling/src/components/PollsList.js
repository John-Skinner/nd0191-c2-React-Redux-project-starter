import {connect} from 'react-redux'
import PollHeadline from "./PollHeadline";

const PollsList = (props) =>
{

    return (
        <div className='pollsGroup'>
            <table>
                <tbody>
                {props.pollsToShow.map((pollId) =>
                {
                    return (

                        <PollHeadline id={pollId} key={pollId} questionId={pollId}></PollHeadline>

                    )
                })
                }
                </tbody>
            </table>
        </div>

    )
}
const mapStateToProps = (state, ownProps) =>
{

    let {authedUser, questions, users} = state;
    authedUser = authedUser.authedUser;

    let userAnswered = users[authedUser];

    let {questionType} = ownProps;
    let pollsToShow = [];
    let wantAnswered = questionType !== 'new';

    for (const question in questions)
    {

        const questionId = question;
        let answered = userAnswered.answers.hasOwnProperty(questionId);
        if (answered === wantAnswered)
        {
            pollsToShow.push(questionId);
        }

    }

    pollsToShow.sort((a, b) =>
    {
        let aDate = questions[a].timestamp;
        let bDate = questions[b].timestamp;
        return bDate - aDate;
    });


    return {
        authedUser,
        questionType,
        pollsToShow,
    }
}
export default connect(mapStateToProps)(PollsList);

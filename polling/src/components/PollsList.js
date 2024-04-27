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

                        <PollHeadline key={pollId} questionId={pollId}></PollHeadline>

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

    console.log(`user:${authedUser}`);
    let {questionType} = ownProps;
    console.log(`mapStateToProps questionType:${questionType} user:${authedUser}`)
    let pollsToShow = [];
    let wantAnswered = questionType !== 'new';

    for (const question in questions)
    {
        console.log(`questions[${question}] has author? ${questions[question].author}`);

        const questionId = question;
        let answered = userAnswered.answers.hasOwnProperty(questionId);
        console.log(`answered? ${answered}`);
        if (answered === wantAnswered)
        {
            pollsToShow.push(questionId);
        }

    }
    console.log(`sorting polls first:${pollsToShow[0]}`);
    pollsToShow.sort((a, b) =>
    {
        let aDate = questions[a].timestamp;
        let bDate = questions[b].timestamp;
        return bDate - aDate;
    });
    console.log(`after sorting polls first:${pollsToShow[0]}`);


    console.log(`new:${pollsToShow}`);
    return {
        authedUser,
        questionType,
        pollsToShow,
    }
}
export default connect(mapStateToProps)(PollsList);

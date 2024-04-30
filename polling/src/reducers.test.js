import questions from './reducers/questions';
import {receiveQuestions} from "./actions/receiveQuestions";
import {acceptUser} from "./actions/authedUser";
import authedUser from "./reducers/authedUser";


describe('reducer tests', () =>
{
    it('questions',  () =>
    {
        let testQuestions = {
            "8xf0y6ziyjabvozdd253nd": {
                id: '8xf0y6ziyjabvozdd253nd',
                author: 'sarahedo',
                timestamp: 1467166872634,
                optionOne: {
                    votes: ['sarahedo'],
                    text: 'Build our new application with Javascript',
                },
                optionTwo: {
                    votes: [],
                    text: 'Build our new application with Typescript'
                }
            },
            "6ni6ok3ym7mf1p33lnez": {
                id: '6ni6ok3ym7mf1p33lnez',
                author: 'mtsamis',
                timestamp: 1468479767190,
                optionOne: {
                    votes: [],
                    text: 'hire more frontend developers',
                },
                optionTwo: {
                    votes: ['mtsamis', 'sarahedo'],
                    text: 'hire more backend developers'
                }
            }
        }
        let action = receiveQuestions(testQuestions);
        let newState = questions(null,action);
        expect(newState["6ni6ok3ym7mf1p33lnez"]).toBeDefined();

    });
    it('authedUser',() => {
        let action = acceptUser('sarahedo');
        let newState = authedUser(null,action);
        expect(newState.authedUser).toBeDefined();
    })
});

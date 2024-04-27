import {_saveQuestion,_saveQuestionAnswer} from './_DATA'
import logo from "./logo.svg";
import logo2 from "./oshikanlu_zenobia.svg";
import users from './reducers/users'
import {updateUser} from "./actions/receiveUsers";
describe('apiTests',()=>{
    it('save question correct',async ()=>{
        try {
            let formattedQuestion = await _saveQuestion({
                optionOneText:'like this option',
                optionTwoText:'like other option',
                author:'john doe'
            });
            console.log(JSON.stringify(formattedQuestion,null,2));
            expect(formattedQuestion).toBeDefined();
        }
        catch (e) {
            expect(false);
        }



    });
    it('save question incorrect',async ()=>{
        try {
             await expect(_saveQuestion({
                optionTwoText:'like other opjtion'
            })).rejects.toEqual('badbad');

        }
        catch (e) {
            expect(false);
        }
    });
    it('save question answer correct',async ()=>{
        try {
            let saveQuestionAnswer = await _saveQuestionAnswer({
                authedUser:'sarahedo',
                qid:'loxhs1bqm25b708cmbf3g',
                answer:'optionOne'
            })
            expect(saveQuestionAnswer).toBeDefined();
        }
        catch (e) {
            expect(false);
        }
    })
    it('save question answer incorrect',async () => {
        try {
            await expect(_saveQuestionAnswer({
                qid:'123,',
                answer:'optionTwo'
            })).rejects.toEqual('something');
        }
        catch (e) {
            expect(false);
        }
    })
    it('updateUserQuestions',()=>{
        const initialUsersState =
{
            sarahedo: {
                id: 'sarahedo',
                password:'password123',
                name: 'Sarah Edo',
                avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
                answers: {
                    "8xf0y6ziyjabvozdd253nd": 'optionOne',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne',
                    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                    "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
            tylermcginnis: {
                id: 'tylermcginnis',
                password:'abc321',
                name: 'Tyler McGinnis',
                avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
                answers: {
                    "vthrdm985a262al8qx3do": 'optionOne',
                    "xj352vofupe1dqz9emx13r": 'optionTwo',
                },
                questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
            },
            mtsamis: {
                id: 'mtsamis',
                password:'xyz123',
                name: 'Mike Tsamis',
                avatarURL:logo,
                answers: {
                    "xj352vofupe1dqz9emx13r": 'optionOne',
                    "vthrdm985a262al8qx3do": 'optionTwo',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne'
                },
                questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
            },
            zoshikanlu: {
                id: 'zoshikanlu',
                password:'pass246',
                name: 'Zenobia Oshikanlu',
                avatarURL: logo2,
                answers: {
                    "xj352vofupe1dqz9emx13r": 'optionOne',
                },
                questions: [],
            }
        }
        let newPollQuestion = {
            "loxhs1bqm25b708cmbf3g": {
                id: 'loxhs1bqm25b708cmbf3g',
                author: 'sarahedo',
                timestamp: 1482579767190,
                optionOne: {
                    votes: [],
                    text: 'q1',
                },
                optionTwo: {
                    votes: ['sarahedo'],
                    text: 'q2'
                }
            }
        };
        let dispatchObj = updateUser('sarahedo',"loxhs1bqm25b708cmbf3g");
        let newStore = users(initialUsersState, dispatchObj);
        JSON.stringify(newStore,null,2);
    });
    it('answerQuestionUpdateReduce',()=> {

    })
})

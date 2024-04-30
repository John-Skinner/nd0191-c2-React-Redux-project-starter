
import {Fragment, useEffect} from "react";
import {connect} from 'react-redux'

import './App.css';
import {initialData} from "./actions/initial";

import PollHeadline from "./components/PollHeadline";
import LoadingBar from "react-redux-loading-bar";
import {receiveQuestions} from "./actions/receiveQuestions";


const  AppPollHeadline = (props)=> {

        let mockQuestions = {
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
        props.dispatch(receiveQuestions(mockQuestions));





  let pollId = '8xf0y6ziyjabvozdd253nd'
    let {users, questions } = props;
  if (!users) {
      return (<div>
          <h2> Loading</h2>
      </div>);
  }
  return (


      <Fragment>
          <LoadingBar/>

      <div>
          <table>
              <tbody>
              <PollHeadline id={pollId} key={pollId} questionId={pollId}/>
              </tbody>
          </table>

      </div>
      </Fragment>

  );
}
function mapStateToProps(props,ownProps){
    let {users,games} = props;
    return {users,games};

}

export default connect(mapStateToProps)(AppPollHeadline);

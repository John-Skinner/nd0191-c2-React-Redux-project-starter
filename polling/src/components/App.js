
import {Fragment, useEffect} from "react";
import {connect} from 'react-redux'

import '../App.css';
import {initialData} from "../actions/initial";
import Home from './Home'
// WARNING, IF YOU import {LoadingBar} it will quietly not appear!!!. Must import LoadinbBar w/o the {}'s
import LoadingBar from "react-redux-loading-bar";
import Nav from './Nav';
import Login from './Login'
import {Route, Routes} from "react-router-dom";
import PollHeadline from "./PollHeadline";
import Leaderboard from "./Leaderboard";
import PollDetails from "./PollDetails";
import NewPoll from "./NewPoll";
import Logout from "./Logout";

const  App = (props)=> {
  useEffect(() =>
  {
    props.dispatch(initialData())
  }, []);

  return (
      <Fragment>
        <LoadingBar/>

        <div className='container'>

                <Nav />


                <Routes>
                  <Route path='/login' exact element={<Login/>}/>
                    <Route path='/' exact element={<Home></Home>}/>
                    <Route path='/leaderboard' exact element={<Leaderboard/>}/>
                    <Route path='/questions/:id' element={<PollDetails/>}/>
                    <Route path='/add' element={<NewPoll/>}/>
                </Routes>


        </div>
      </Fragment>

  );
}


export default connect()(App);

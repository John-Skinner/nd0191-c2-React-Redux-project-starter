import { Link} from 'react-router-dom'
import {useEffect, useState} from "react";
import {logout} from "../actions/logout";
import {connect} from "react-redux";
import Logout from "./Logout";

const Nav = (props) => {

    useEffect(() =>
    {

    }, []);
    const [currentUrl,setCurrentUrl] = useState('/');

    console.log('registering for onPopState event');
    const urlChangedCB = (url) => {
        console.error(`Nav *** url changed to ${window.location.pathname}`)
        props.dispatch(logout(url));
        setCurrentUrl(window.location.pathname);

    }

    window.addEventListener('load',()=>{
        urlChangedCB(window.location.pathname);
    })
    window.addEventListener('popstate',()=> {
        urlChangedCB(window.location.pathname);
    })


    const homeClicked = (e)=>{
        console.log('home clicked');
        setCurrentUrl('/');
    }

    const leaderBoardClicked = (e)=>{
        console.log('leaderboard clicked');
        setCurrentUrl('/leaderboard');
    }
    const newClicked = (e)=>{
        console.log('new clicked');
        setCurrentUrl('/new');
    }




    return (
        <nav className='nav'>
            <ol className='navlist'>
                <li className={currentUrl==='/'?'navItemSelected':'navItem'}>
                    <Link to='/' state={{cameFromNav:true}} onClick={homeClicked}>Home</Link>
                </li>
                <li className={currentUrl==='/leaderboard'?'navItemSelected':'navItem'}>
                    <Link to='/leaderboard' state={{cameFromNav:true}} onClick={leaderBoardClicked}>Leaderboard</Link>
                </li>
                <li className={currentUrl==='/new'?'navItemSelected':'navItem'}>
                    <Link to='/add' state={{cameFromNav:true}} onClick={newClicked} >New Poll</Link>
                </li>
                <li className='navItem'></li>
                <li className='navItem'>
                    <Logout />
                </li>
            </ol>
        </nav>

    )
}

export default connect()(Nav);

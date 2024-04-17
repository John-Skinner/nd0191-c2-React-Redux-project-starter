
import {Fragment, useEffect} from "react";
import {connect} from 'react-redux'
import {getInitialData} from "./utils/api";


const  MocApp = (props)=> {
    console.log(`App props:`);
    console.dir(props);
    useEffect(() =>
    {
        console.log('useEffect called');
        props.dispatch(getInitialData())
    }, []);
    return (
       <div>
           Moc App
       </div>

    );
}
const mapStateToProps = ({authedUser}) => {
    return {
        loading:authedUser=null
    }
}

export default connect(mapStateToProps)(MocApp);

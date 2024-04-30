import {connect} from "react-redux";

const Page404  = (props) => {
    return (
        <div>
            <h1>
                Error 404
            </h1>
            <h2>
                The url is found.  Return to home page.
            </h2>
        </div>
    )
}
export default connect()(Page404);

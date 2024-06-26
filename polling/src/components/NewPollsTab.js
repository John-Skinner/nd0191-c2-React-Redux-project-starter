import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";
import {checkedLoggedIn, getLoggedInTree} from "../utils/assureLoggedIn";
import PollsList from "./PollsList";

const HomeTabs = (props) => {
    let loggedIn = checkedLoggedIn(props);
    if (loggedIn) {
        return (
            <Tabs>
                <TabList>
                    <Tab>
                        New
                    </Tab>
                    <Tab>
                        Completed
                    </Tab>
                </TabList>
                <TabPanel>
                        <div>
                            <PollsList questionType='new'/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <PollsList questionType='answered'/>
                    </div>
                </TabPanel>
            </Tabs>
        )
    } else
    {
        return getLoggedInTree()
    }

}

function mapStateToProps(props)
{

    const {authedUser, questions} = props;

    return {
        authedUser: authedUser,
        questions: questions
    };
}
export default connect(mapStateToProps)(HomeTabs);

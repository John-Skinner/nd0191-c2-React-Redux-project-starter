import {initial, initialData} from './actions/initial'
import middleware from "./middleware";
import { render, screen } from '@testing-library/react';
import {createStore} from 'redux'
import {Provider} from "react-redux";
import reducer from './middleware'
import App from "./components/App";
import PollHeadline from "./components/PollHeadline";





describe('initial actions',()=>{
    it('login',()=>{
        const store = createStore(reducer,middleware);
        render(
            <Provider store={store}>
                <App>
                    <PollHeadline id='123'/>
                </App>

            </Provider>
        )

    })
})

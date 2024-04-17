import  {initial} from './actions/initial'
import middleware from "./middleware";
import { render, screen } from '@testing-library/react';
import {createStore} from 'redux'
import {Provider} from "react-redux";
import reducer from './middleware'
import App from "./components/App";



describe('initial actions',()=>{
    it('login',()=>{
        const store = createStore(reducer,middleware);
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
        let uid='tom';
        let pw = '123';
        store.dispatch(initial(uid,pw))
    })
})

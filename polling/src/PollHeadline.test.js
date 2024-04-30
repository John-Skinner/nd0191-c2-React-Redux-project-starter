
import {render} from '@testing-library/react';

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {createStore} from "redux";


import reducer from './reducers'
import middleware from "./middleware";
import AppPollHeadline from "./AppPollHeadline";



test('renders main app',()=> {


    const store=createStore(reducer,middleware);

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <AppPollHeadline/>
            </BrowserRouter>
        </Provider>
    );
    expect(component).toMatchSnapshot();
})

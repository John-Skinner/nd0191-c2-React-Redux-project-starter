import {fireEvent, render, waitFor} from '@testing-library/react';

import {Provider} from "react-redux";

import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {createStore} from "redux";

import reducer from './reducers'
import middleware from "./middleware";
import {RECEIVE_QUESTIONS} from "./actions/receiveQuestions";


test('renders main app', async () =>
{

    const store = createStore(reducer, middleware);

    const {container, getByText, getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
    await waitFor(() =>
    {
        let state = store.getState();

        expect(state.users['sarahedo']).toBeDefined();
    });
    console.log('initial dispatch initialized');
    const pwInput = getByTestId('pwInput');
    fireEvent.change(pwInput,
        {
            target: {
                value: 'password123'
            }
        });
    console.log('about to click submit');
    fireEvent.click(getByText('Submit'));
    console.log('clicked submit');
    await waitFor(() =>
    {
        expect(getByText('Done')).toBeDefined();
    });
})

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import reducer from './reducers'
import middleware from "./middleware";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {createDispatchHook} from "react-redux";


const store=createStore(reducer,middleware);
const urlChanged = (url) => {
    console.error(`*******url changed to ${window.location.pathname}`)

}

window.addEventListener('load',()=>{
    urlChanged(Window.url);
})
window.addEventListener('popstate',()=> {
    urlChanged(window.url);
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

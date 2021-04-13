import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App"
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from './store/action'

const store = createStore(
    reducer,
    composeWithDevTools()
)

store.dispatch(ActionCreator.overdueCards());

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>,
    document.querySelector(`#root`)
);
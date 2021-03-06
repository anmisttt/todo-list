import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App"
import {Provider} from 'react-redux';
import {store} from './store/store';
import {ActionCreator} from './store/action'

store.dispatch(ActionCreator.overdueCards());

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>,
    document.querySelector(`#root`)
);

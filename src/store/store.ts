import {createStore} from 'redux';
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(
    reducer,
    composeWithDevTools()
)

export type Dispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>

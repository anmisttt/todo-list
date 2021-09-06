import {createStore} from 'redux';
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(
    reducer,
    composeWithDevTools()
)

export interface Dispatch<A> {
    <T extends A>(action: T): T
  }
export type IState = ReturnType<typeof store.getState>

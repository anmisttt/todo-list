import {createStore} from 'redux';
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import MocksCards from '../mocks/cards'

const state = localStorage.getItem('cards') 
      ? JSON.parse(localStorage.getItem('cards') || '')
      : {cards: MocksCards}


export const store = createStore(
    reducer,
    state,
    composeWithDevTools()
)

store.subscribe(()=>{
  localStorage.setItem('cards', JSON.stringify(store.getState()))
})


export interface Dispatch<A> {
    <T extends A>(action: T): T
  }
export type IState = ReturnType<typeof store.getState>

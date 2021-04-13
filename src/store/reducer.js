import {ActionType} from './action'
import cards from '../mocks/cards.js'
import moment from 'moment'

const initialState = {
    cards: cards
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionType.CREATE_CARD:
            return {
                cards: [...state.cards, action.payload]
            };
        case ActionType.DELETE_CARD:
            let cardDelIndex = state.cards.findIndex((card) => card.id===action.payload)
            return {
                cards: [...state.cards.slice(0, cardDelIndex), ...state.cards.slice(cardDelIndex+1)]
            };
        case ActionType.DONE_CARD:
            let cardDoneIndex = state.cards.findIndex((card) => card.id===action.payload)
            let newCard = state.cards[cardDoneIndex];
            newCard.status = "done"
            return {
                cards: [...state.cards.slice(0,cardDoneIndex), newCard, ...state.cards.slice(cardDoneIndex+1)]
            };
        case ActionType.EDIT_CARD:
            let cardEditIndex = state.cards.findIndex((card) => card.id===action.payload.id)
            return {
                cards: [...state.cards.slice(0,cardEditIndex), action.payload, ...state.cards.slice(cardEditIndex+1)]
            };
        case ActionType.OVERDUE_CARDS:
            const today = new Date();
            return {
                    cards: state.cards.map(card => {
                    card.status = (card.status === 'done' ? 'done' : (moment(today).isAfter(moment(card.date))) ? 'overdue' : 'active')
                    return card
                })
            }
    }
    return state;
}

export {reducer}
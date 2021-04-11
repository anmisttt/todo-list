import {ActionType} from './action'
import cards from '../mocks/cards.js'

const initialState = {
    cards: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionType.CREATE_CARD:
            return {
                cards: state.cards.push(action.payload)
            };
        case ActionType.DELETE_CARD:
            return {
                cards: [state.cards.slice(0, action.payload), state.cards.slice(action.payload+1)]
            }
        case ActionType.CHANGE_STATUS:
            let newCard = state.cards[action.payload.cardId];
            newCard.status = action.payload.status
            return {
                cards: [state.cards.slice(0, action.payload), newCard, state.cards.slice(action.payload+1)]
            }
    }
}

export {reducer}
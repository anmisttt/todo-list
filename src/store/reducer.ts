import {ActionType} from './action'
import cards from '../mocks/cards'
import moment from 'moment'
import {sordDates} from '../utils/date'
import { CardStatuses } from '../constants'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    cards: cards
}

const reducer = (state=initialState, action:PayloadAction<any>) => {
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
                    card.status = (card.status === CardStatuses.DONE ? CardStatuses.DONE : (moment(today).isAfter(moment(card.endDate))) ? CardStatuses.OVERDUE : CardStatuses.IN_PROGRESS)
                    return card
                })
            }
        case ActionType.SORT_CARDS:
            return {
                cards: (action.payload=='default') ?
                state.cards.sort((card1, card2) => sordDates(card1.startDate, card2.startDate)) :
                (action.payload=='dateUp') ?
                state.cards.sort((card1, card2) => sordDates(card1.endDate, card2.endDate)) :
                state.cards.sort((card1, card2) => sordDates(card2.endDate, card1.endDate))
            }
    }
    return state;
}

export {reducer}
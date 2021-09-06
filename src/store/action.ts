import { Card } from '../constants';

export const ActionType = {
    CREATE_CARD: 'createCard',
    DELETE_CARD: 'deleteCard',
    EDIT_CARD: 'editCard',
    DONE_CARD: 'doneCard',
    OVERDUE_CARDS: 'overdueCards',
    SORT_CARDS: 'sortCards'
}

export const ActionCreator = {
    createCard: (card: Card) => ({
        type: ActionType.CREATE_CARD,
        payload: card
    }),
    deleteCard: (cardId: number) => ({
        type: ActionType.DELETE_CARD,
        payload: cardId
    }),
    editCard: (cardId: number) => ({
        type: ActionType.EDIT_CARD,
        payload: cardId
    }),
    doneCard: (cardId: number) => ({
        type: ActionType.DONE_CARD,
        payload: cardId
    }),
    overdueCards: () => ({
        type: ActionType.OVERDUE_CARDS
    }),
    sortCards: (sortType: string) => ({
        type: ActionType.SORT_CARDS,
        payload: sortType
    })
}
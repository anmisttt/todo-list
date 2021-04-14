export const ActionType = {
    CREATE_CARD: 'createCard',
    DELETE_CARD: 'deleteCard',
    EDIT_CARD: 'editCard',
    DONE_CARD: 'doneCard',
    OVERDUE_CARDS: 'overdueCards',
    SORT_CARDS: 'sortCards'
}

export const ActionCreator = {
    createCard: (card) => ({
        type: ActionType.CREATE_CARD,
        payload: card
    }),
    deleteCard: (cardId) => ({
        type: ActionType.DELETE_CARD,
        payload: cardId
    }),
    editCard: (cardId) => ({
        type: ActionType.EDIT_CARD,
        payload: cardId
    }),
    doneCard: (cardId) => ({
        type: ActionType.DONE_CARD,
        payload: cardId
    }),
    overdueCards: () => ({
        type: ActionType.OVERDUE_CARDS
    }),
    sortCards: (sortType) => ({
        type: ActionType.SORT_CARDS,
        payload: sortType
    })
}
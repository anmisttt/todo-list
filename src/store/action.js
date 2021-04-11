export const ActionType = {
    CREATE_CARD: 'createCard',
    DELETE_CARD: 'deleteCard',
    CHANGE_STATUS: 'changeStatus'
}

export const ActionCreator = {
    createCard: (card) => ({
        type: ActionType.CREATE_CARD,
        payload: card
    }),
    deleteCard: (cardId) => ({
        type: ActionType.CREATE_CARD,
        payload: cardId
    }),
    editCard: (cardId) => ({
        type: ActionType.CREATE_CARD,
        payload: cardId
    }),
    changeCard: (newInfo) => ({
        type: ActionType.CREATE_CARD,
        payload: newInfo
    })
}
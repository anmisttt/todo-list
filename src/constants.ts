export interface Card {
    id: number | string,
    title: string,
    description: string,
    status: string,
    startDate: string | Date,
    endDate: string | Date
}

export interface State {
    cards: Card[]
}
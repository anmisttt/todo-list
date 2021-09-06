export interface Card {
    id: number,
    title: string,
    description: string,
    status: string,
    startDate: string,
    endDate: string
}

export interface State {
    cards: Card[]
}

export const CardStatuses: CardStatusesInterface = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
    OVERDUE: 'Overdue'
}

export interface CardStatusesInterface {
    [propertyName: string]: string;
}

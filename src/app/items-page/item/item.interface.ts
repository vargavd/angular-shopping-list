export interface IItem {
    id: number;
    name: string;
    current: boolean;
    currentLink?: string;
    history?: Array<{
        date: Date,
        quantity: number,
        link: string
    }>
}
export interface IItem {
    id: number;
    name: string;
    current: boolean;
    history?: Array<{
        date: Date,
        quantity: number,
        link: string
    }>
}
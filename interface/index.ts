export interface IProduct {
    id: string | null;
    title: string;
    body: string | null;
    image: string | null;
    price: number | null;
    completed: boolean;
    createdAd?: Date;
}


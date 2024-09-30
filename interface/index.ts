export interface IProduct {
    id: string;
    title: string;
    body: string | null;
    image: string | null;
    price: number | null;
    completed: boolean;
    createdAd: Date;
}


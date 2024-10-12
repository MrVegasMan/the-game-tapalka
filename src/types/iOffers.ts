export interface OfferTask {
    id: number | string;
    title: string;
    description: string;
    mainIco: string;
    tasks: OfferSubTasks[];
}

export interface OfferSubTasks {
    id: number | string;
    rewards: number;
    title: string;
    subIco: string;
    done: boolean;
}

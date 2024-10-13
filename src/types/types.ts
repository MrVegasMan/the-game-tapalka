// OfferWall Admin GET

export type TaskTemplateAdmin = {
    description: string;
    image_id: string;
    link: string;
    name: string;
    reward: number;
    type: 'subscribe_tg';
};

export type OfferAdmin = {
    active: boolean;
    description: string;
    image_id: string;
    name: string;
    reward: number;
    taskTemplates: TaskTemplateAdmin[];
};

export type ResponseOfferAdmin = OfferAdmin[];
// Authorization Entrypoint POST

export type Answer = {
    code: number;
    text: string;
};

export type InitProblem = {
    answers: Answer[];
    id: string;
    level: number;
    question: string;
};

export type OfflineEarning = {
    pointes_earned: number;
    questions_number: number;
};

export type QuestionsBalance = {
    available: number;
    limit: number;
};

export type User = {
    first_name: string;
    id: string;
    is_premium: boolean;
    last_name: string;
    offline_earning: OfflineEarning;
    pointes_balance: number;
    questions_balance: QuestionsBalance;
    username: string;
};

export type AuthorizationData = {
    init_problem: InitProblem;
    user: User;
};

// Leaderboard GET

export type LeaderboardEntry = {
    balance: number;
    first_name: string;
    id: string;
    is_premium: boolean;
    last_name: string;
    rank: number;
    username: string;
};

// type Leaderboard = LeaderboardEntry[];

// OfferWall GET
export type Task = {
    completed: boolean;
    description: string;
    id: string;
    image: {
        url: string;
    };
    link: string;
    name: string;
    reward: number;
    type: 'subscribe_tg' | 'another_type';
};

export type Offerwall = {
    completed: boolean;
    description: string;
    earned: number;
    id: string;
    image: {
        url: string;
    };
    name: string;
    reward: number;
    tasks: Task[];
};

// OfferWall POST
export type TaskIdRequest = {
    task_id: string; // Идентификатор задачи
};

// OfflineEarning POST
export type OfflineEarningRequest = {
    first_name: string;
    id: string;
    is_premium: boolean;
    last_name: string;
    offline_earning: {
        pointes_earned: number;
        questions_number: number;
    };
    pointes_balance: number;
    questions_balance: {
        available: number;
        limit: number;
    };
    username: string;
};

// User Profile GET
export type UserProfile = {
    first_name: string;
    id: string;
    is_premium: boolean;
    last_name: string;
    offline_earning: {
        pointes_earned: number;
        questions_number: number;
    };
    pointes_balance: number;
    questions_balance: {
        available: number;
        limit: number;
    };
    username: string;
};

// Wallet POST
export type WalletRequest = {
    address: string;
    chain: string;
    walletStateInit: string;
};

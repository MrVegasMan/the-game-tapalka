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

// Health-Check GET
export type HealthCheck = {
    health: number;
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

export type Leaderboard = LeaderboardEntry[];

// UserOfferWall GET
export type UserTask = {
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

export type UserOfferwall = {
    completed: boolean;
    description: string;
    earned: number;
    id: string;
    image: {
        url: string;
    };
    name: string;
    reward: number;
    tasks: UserTask[];
};

export type ResponseUserOfferwall = UserOfferwall[];

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
export type UserRank = {
    rank: number;
};

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

// Referrals GET

export type UserReferrals = {
    first_name: string;
    id: string;
    is_premium: boolean;
    last_name: string;
    total_earned: number;
    username: string;
};

export type ResponseUserReferrals = UserReferrals[];

// Wallet POST
export type WalletRequest = {
    address: string;
    chain: string;
    walletStateInit: string;
};

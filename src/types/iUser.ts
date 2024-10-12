export interface User {
    tg_id: string;
    is_premium: boolean;
    earn: number;
    referralCode: string;
    referredBy?: string | null;
}

export interface Friends {
    tg_id: string;
    is_premium: boolean;
    earn: number;
    referralCode: string; // Реферальный код пользователя
    referredBy?: string | null; // Кто пригласил пользователя
}

import type { AxiosInstance } from 'axios';

import type { Leaderboard } from '../types.ts';

export default function createLeaderboardApi(instanceAxios: AxiosInstance) {
    return {
        getLeaderboard: async () => {
            return await instanceAxios.get<Leaderboard>('/leaderboard');
        }
    };
}

import type { AxiosInstance } from 'axios';

import type { UserProfile, UserRank } from '../types.ts';

export default function createUserApi(instanceAxios: AxiosInstance) {
    return {
        getUserRank: async () => {
            return await instanceAxios.get<UserRank>('/rank');
        },
        getUserProfile: async () => {
            return await instanceAxios.get<UserProfile>('/user');
        }
    };
}

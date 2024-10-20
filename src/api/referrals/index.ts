import type { AxiosInstance } from 'axios';

import type { ResponseUserReferrals } from '../types.ts';

export default function createReferralsApi(instanceAxios: AxiosInstance) {
    return {
        getReferrals: async () => {
            return await instanceAxios.get<ResponseUserReferrals>('/referral');
        }
    };
}

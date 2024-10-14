import type { AxiosInstance } from 'axios';

import type { OfflineEarning } from '../types.ts';

export default function createClaimOfflineEarningApi(instanceAxios: AxiosInstance) {
    return {
        postOfflineEarning: async (body: OfflineEarning) => {
            return await instanceAxios.post('//offline-earning', body);
        }
    };
}

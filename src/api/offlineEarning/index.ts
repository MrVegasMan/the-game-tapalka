import type { AxiosInstance } from 'axios';

import type { ResponseUserOfferwall, UserOfferwall } from '../types.ts';

export default function createOfferwallApi(instanceAxios: AxiosInstance) {
    return {
        getUserOfferwall: async () => {
            return await instanceAxios.get<ResponseUserOfferwall>('/offerwall');
        },
        postUserOfferwall: async (body: UserOfferwall) => {
            return await instanceAxios.post('/offerwall', body);
        }
    };
}

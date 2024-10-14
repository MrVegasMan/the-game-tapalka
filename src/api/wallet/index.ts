import type { AxiosInstance } from 'axios';

import type { WalletRequest } from '../types.ts';

export default function createWalletCheckApi(instanceAxios: AxiosInstance) {
    return {
        postWalletRequest: async (body: WalletRequest) => {
            return await instanceAxios.post('/wallet', body);
        }
    };
}

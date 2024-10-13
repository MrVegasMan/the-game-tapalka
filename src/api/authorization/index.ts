import type { AxiosInstance } from 'axios';

export default function createAuthorizationApi(instanceAxios: AxiosInstance) {
    return {
        postCreateUser: async () => {
            return await instanceAxios.post('/entrypoint', {});
        }
    };
};

import type { AxiosInstance } from 'axios';

import createAdminApi from './admin';
import createAuthorizationApi from './authorization';

function createApi(instanceAxios: AxiosInstance) {
    return {
        adminApi: createAdminApi(instanceAxios),
        authorizationApi: createAuthorizationApi(instanceAxios)
    };
}
export default createApi;
export type TApi = ReturnType<typeof createApi>;

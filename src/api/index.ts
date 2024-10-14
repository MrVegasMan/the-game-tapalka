import type { AxiosInstance } from 'axios';

import createAdminApi from './admin';
import createAuthorizationApi from './authorization';
import createUserApi from './user';

function createApi(instanceAxios: AxiosInstance) {
    return {
        userApi: createUserApi(instanceAxios),
        adminApi: createAdminApi(instanceAxios),
        authorizationApi: createAuthorizationApi(instanceAxios)
    };
}
export default createApi;
export type TApi = ReturnType<typeof createApi>;

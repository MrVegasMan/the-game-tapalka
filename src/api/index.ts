import type { AxiosInstance } from 'axios';

import createAdminApi from './admin';
import createAuthorizationApi from './authorization';
import createDefaultApi from './default';
import createLeaderboardApi from './leaderboard';
import createOfferwallApi from './offerwall';
import createOfflineEarningApi from './offlineEarning';
import createReferralsApi from './referrals';
import createUserApi from './user';
import createWalletApi from './wallet';

function createApi(instanceAxios: AxiosInstance) {
    return {

        adminApi: createAdminApi(instanceAxios),
        authorizationApi: createAuthorizationApi(instanceAxios),
        defaultApi: createDefaultApi(instanceAxios),
        leaderboardApi: createLeaderboardApi(instanceAxios),
        offerwallApi: createOfferwallApi(instanceAxios),
        offlineEarningApi: createOfflineEarningApi(instanceAxios),
        referralsApi: createReferralsApi(instanceAxios),
        userApi: createUserApi(instanceAxios),
        walletApi: createWalletApi(instanceAxios)
    };
}
export default createApi;
export type TApi = ReturnType<typeof createApi>;

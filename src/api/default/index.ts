import type { AxiosInstance } from 'axios';

import type { HealthCheck } from '../types.ts';

export default function createHealthCheckApi(instanceAxios: AxiosInstance) {
    return {
        getHealthCheck: async () => {
            return await instanceAxios.get<HealthCheck>('/health-check');
        }
    };
};

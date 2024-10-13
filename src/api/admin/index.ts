import type { AxiosInstance } from 'axios';

import type { OfferAdmin, ResponseOfferAdmin } from '@/types/types.ts';

export default function createAdminApi(instanceAxios: AxiosInstance) {
    return {
        getTaskGroups: async () => {
            return await instanceAxios.get<ResponseOfferAdmin>('/admin/offerwall');
        },
        postTaskGroups: async (body: OfferAdmin) => {
            return await instanceAxios.post('/admin/offerwall', body);
        },
        postTaskGroupsMedia: async (imageType: 'task_cover' | 'group_cover' | 'user_cover' | 'booster_cover', file: File) => {
            return await instanceAxios.post('/media', {
                imageType,
                file
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
    };
}

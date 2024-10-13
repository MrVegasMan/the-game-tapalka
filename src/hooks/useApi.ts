import { useContext } from 'react';

import apiContext from '@/contexts/api.ts';

function useApi() {
    const api = useContext(apiContext);

    if (api === null) {
        throw new Error('useApi must be defined');
    }

    return api;
}

export default useApi;

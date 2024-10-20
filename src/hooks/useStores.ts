import { useContext } from 'react';

import storesContext from '@/contexts/stores.ts';

function useStores() {
    const stores = useContext(storesContext);

    if (stores === null) {
        throw new Error('useStore must be defined');
    }

    return stores;
}

export default useStores;

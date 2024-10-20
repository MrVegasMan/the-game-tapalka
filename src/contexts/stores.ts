import { createContext } from 'react';

import type { TStores } from '@/stores';

const storeContext = createContext<TStores | null>(null);

export default storeContext;

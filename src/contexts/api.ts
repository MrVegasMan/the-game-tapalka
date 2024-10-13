import { createContext } from 'react';

import type { TApi } from '@/api';

const apiContext = createContext<TApi | null>(null);
export default apiContext;

import '@styles/index.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import createApi from '@/api';
import apiContext from '@/contexts/api.ts';
import createAxios from '@/plugin/axios.ts';

import App from './App.tsx';

const axios = createAxios(import.meta.env.VITE_API_URL);
const api = createApi(axios);
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <apiContext.Provider value={api}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </apiContext.Provider>
);

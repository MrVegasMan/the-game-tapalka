import '@styles/index.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import createApi from '@/api';
import apiContext from '@/contexts/api.ts';
// import storesContext from '@/contexts/stores.ts'; // контекст для хранения Zustand сторов
import createAxios from '@/plugin/axios.ts';
// import createStores from '@/stores'; // твой стор

import App from './App.tsx';

// const stores = createStores(); // создание всех сторов
const axios = createAxios(import.meta.env.VITE_API_URL);
const api = createApi(axios);
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    // <storesContext.Provider value={stores}>
        <apiContext.Provider value={api}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </apiContext.Provider>
    // </storesContext.Provider>
);

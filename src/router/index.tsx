import type { RouteObject } from 'react-router/dist/lib/context';

import LayoutDefault from '@/layouts/default.tsx';
import Home from '@/views/Home';

import Boosters from '@views/Boosters';
import Friends from '@views/Friends';
import LeaderBoard from '@views/LeaderBoard';
import Offerwall from '@views/Offerwall';
import TheGame from '@views/TheGame';

const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/leaderboard',
                element: <LeaderBoard />
            },
            {
                path: '/offerwall',
                element: <Offerwall />
            },
            {
                path: '/thegame',
                element: <TheGame />
            },
            {
                path: '/boosters',
                element: <Boosters />
            },
            {
                path: '/friends',
                element: <Friends />
            }
        ]
    }
] as const satisfies RouteObject[];

export default routes;

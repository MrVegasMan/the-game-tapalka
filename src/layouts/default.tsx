import { Outlet } from 'react-router';

import { AppFooter } from '@components/AppFooter/AppFooter.tsx';
import { UserScore } from '@components/UserScore/UserScore.tsx';

function LayoutDefault() {
    return (
        <>
            <UserScore />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    );
}

export default LayoutDefault;

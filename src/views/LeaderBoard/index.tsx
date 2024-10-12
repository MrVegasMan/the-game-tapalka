import { useState } from 'react';

import { mockUsers } from '@/mocs/index.ts';

import LeaderBoardCard from '@views/LeaderBoard/leaderBoardCard.tsx';

import styles from './index.module.scss';

function LeaderBoard() {
    const [pageTitle] = useState('Leaderboard');

    return (
        <div className="p-lr-spacing-100">
            <h1 className="display-450-accent mt-40">{pageTitle}</h1>
            <div className="flex flex-col gap-4px mt-16">
                <p className="text-250-default text-content-neutral-tertiary text-left px-20">Your rank</p>

                <div className={`flex items-center gap-16px ${styles.leaderBoardCard}`}>
                    <div className={`bg-brand-high ${styles.leaderBoardRankW}`}>
                        <p className="compact-300-accent-numeric">1235</p>
                    </div>
                    <div className="flex flex-col gap-2px text-left">
                        <p className="compact-350-accent">Investment kingury</p>

                        <p className="compact-250-default">
                            29
                            {` `}
                            <span>🧠</span>
                        </p>

                    </div>
                </div>

            </div>
            <ul className="flex flex-col gap-4px mt-24">
                {mockUsers.map((user, index) => (
                    <LeaderBoardCard data={user} key={user.tg_id} index={index} />
                ))}
            </ul>
        </div>
    );
}

export default LeaderBoard;

import { Friends } from '@/types/iFriends.ts';

import styles from './index.module.scss';

interface PropsFriends {
    data: Friends;
    index: number;
}

const LeaderBoardCard = ({ data, index }: PropsFriends) => {
    return (
        <div className={`flex items-center gap-16px ${styles.leaderBoardCard}`}>
            <div className={`${styles.leaderBoardRankW} ${styles.bordered}`}>
                <p className="compact-300-accent-numeric">{index + 1}</p>
            </div>
            <div className="flex flex-col gap-2px text-left">
                <p className="compact-350-accent">{data.tg_id}</p>

                <p className="compact-250-default">
                    {data.earn}
                    {` `}
                    <span>🧠</span>
                </p>

            </div>
        </div>
    );
};

export default LeaderBoardCard;

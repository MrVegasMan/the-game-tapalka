import './FriendCard.scss';

import { Friends } from '@/types/iFriends.ts';

interface PropsFriends {
    data: Friends;
}

const FriendCard = ({ data }: PropsFriends) => {
    // const {data} = props

    // const {totalRewards} = useTotalRewards(data.tasks)

    return (
        <li className="referral-list-item-w flex flex-row items-center gap-12px py-12">
            <div className="user-avatar rounded-full overflow-hidden bg-brand-high grow-0">
                <img
                    className="size-full"
                    src="/src/assets/images/wojak.svg"
                    alt="User Avatar"
                />
            </div>

            <p className="compact-300-accent text-left justify-self-start text-ellipsis grow">{data.tg_id}</p>

            <div className="flex flex-row gap-8px grow-0 text-nowrap">
                {data.is_premium && <p className="compact-300-accent-numeric">⭐</p>}
                <p className="compact-300-accent-numeric">
                    {data.earn}
                    {' '}
                    {' '}
                    {' '}
                    <span>🧠</span>
                </p>
            </div>
        </li>
    );
};

export default FriendCard;

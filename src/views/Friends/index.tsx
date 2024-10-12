import './friendsPage.scss';

import { useState } from 'react';

import { mockUsers } from '@/mocs/index.ts';

import FriendCard from '@components/Friend/FriendCard.tsx';
import InviteFriends from '@components/Invite/InviteFriends.tsx';

interface FriendBonusCardData {
    label: string;
    value: number;
    icon?: string;
}

const totalEarned = mockUsers.reduce((acc, user) => (acc + user.earn) / 100 * 20, 0);

const premiumCount = mockUsers.filter((user) => user.is_premium).length;

const friendsData: FriendBonusCardData[] = [
    { label: 'Friends', value: mockUsers.length },
    { label: 'IQ Earned', value: totalEarned, icon: '🧠' },
    { label: 'Premium ref', value: premiumCount, icon: '⭐' }
];

function Friends() {
    const [pageTitle] = useState('Friends');

    return (
        <div className="p-lr-spacing-100 flex flex-col gap-24px">
            <div>
                <h1 className="display-450-accent mt-40">{pageTitle}</h1>
                <p className="text-350-default mt-8">Invite your friends and get 20% of their claims</p>

                <div className="grid grid-cols-3 gap-4px mt-12">

                    {friendsData.map((friend, index) => (
                        <div key={index} className="friends-bonus-card-w bg-neutral-low rounded-20 py-20 px-12">
                            <p className="compact-250-default text-content-neutral-secondary">{friend.label}</p>
                            <p className="compact-350-accent mt-2">
                                {friend.value}
                                {' '}
                                {friend.icon
                                && <span>{friend.icon}</span>}
                                {' '}
                                {/* Отображаем иконку только если она есть */}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
            <InviteFriends addWrapperClassName="mt-8" />

            <div className="text-left py-8 px-20">
                <h3 className="display-350-accent">Friends</h3>
                <ul className="py-5">
                    {mockUsers.map((user) => (
                        <FriendCard data={user} key={user.tg_id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Friends;

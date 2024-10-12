import { OfferTask } from '@/types/iOffers.ts';
import { User } from '@/types/iUser.ts';

export const oferCard: OfferTask[] = [{
    id: 234,
    title: 'Grow our community',
    description: 'Earn rewards easily by becoming a member of our community and sharing it with your friends!',
    mainIco: 'tg',
    tasks: [{
        id: 2348978,
        rewards: 600,
        title: 'Invite friends',
        subIco: 'tg',
        done: false
    },
    {
        id: 21234,
        rewards: 400,
        title: 'Invite friends done true',
        subIco: 'tg',
        done: true
    },
    {
        id: 4356234,
        rewards: 200,
        title: 'Subscribe to Meme Chanel done true',
        subIco: 'tg',
        done: true
    },
    {
        id: 23,
        rewards: 300,
        title: 'Subscribe to Meme Chanel',
        subIco: 'tg',
        done: false
    }]
}];

export const mockUsers: User[] = [
    {
        tg_id: '@ddiddi',
        is_premium: false,
        earn: 1110,
        referralCode: 'REFERRAL123',
        referredBy: 'INVITER123'
    },
    {
        tg_id: '@iddqd',
        is_premium: true,
        earn: 1200,
        referralCode: 'REFERRAL456',
        referredBy: 'INVITER123'
    },
    {
        tg_id: '@idkfa',
        is_premium: false,
        earn: 500,
        referralCode: 'REFERRAL789',
        referredBy: 'INVITER123'
    },
    {
        tg_id: '@idclip',
        is_premium: true,
        earn: 800,
        referralCode: 'REFERRAL012',
        referredBy: 'INVITER123'
    },
    {
        tg_id: '@doom',
        is_premium: false,
        earn: 300,
        referralCode: 'REFERRAL345',
        referredBy: 'INVITER123'
    }
];

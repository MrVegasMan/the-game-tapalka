import useStores from '@hooks/useStores.ts';
import {useStore} from "zustand";

const UserProfileComponent = () => {
    const { userStore } = useStore(); // безопасно получаем userStore из store

    return (
        <div>
            <h1>{userStore.user?.first_name ?? 'No user'}</h1>
            <button
                onClick={() =>
                    userStore.setUser({
                        first_name: 'John',
                        last_name: 'Doe',
                        is_premium: true,
                        id: '123',
                        offline_earning: { pointes_earned: 10, questions_number: 5 },
                        pointes_balance: 100,
                        questions_balance: { available: 5, limit: 10 },
                        username: 'johndoe'

                    })}
            >
                Set User
            </button>
            <button onClick={userStore.clearUser}>Clear User</button>
        </div>
    );
};

export default UserProfileComponent;

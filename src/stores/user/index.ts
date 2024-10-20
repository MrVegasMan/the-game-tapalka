import { create } from 'zustand';

import { UserProfile } from '@/api/types.ts';

interface UserState {
    user: UserProfile | null;
    setUser: (user: UserProfile) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null })
}));

export default useUserStore;

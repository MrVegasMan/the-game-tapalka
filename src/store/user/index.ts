import { create } from 'zustand';

const useStore = create((set) => ({
    user: 0,
    increasePopulation: () => set((state) => ({ user: state.user + 1 })),
    removeAllBears: () => set({ user: 0 }),
    updateBears: (newUser) => set({ user: newUser })
}));

import createUserStore from './user';
// import useAuthorizationStore from './authorization'; // пример
// import useWalletStore from './wallet'; // пример

const createStores = () => ({
    userStore: createUserStore()
    // authorizationStore: useAuthorizationStore(),
    // walletStore: useWalletStore(),
    // Добавляешь все остальные сторы здесь

});

export default createStores;
export type TStores = ReturnType<typeof createStores>;

import { OfferSubTasks } from '@/types/iOffers.ts';

function useTotalRewards(tasks: OfferSubTasks[]) {
    const getTotalRewards = (arr: OfferSubTasks[]) => arr.reduce((acc, task) => acc + task.rewards, 0);
    const getDoneRewards = () => tasks.filter((task) => task.done);

    return {
        totalRewards: getTotalRewards(tasks),
        totalDoneRewards: getTotalRewards(getDoneRewards())
    };
}

export default useTotalRewards;

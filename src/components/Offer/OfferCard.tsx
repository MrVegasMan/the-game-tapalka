import './OfferCard.scss';

import { OfferTask } from '@/types/iOffers.ts';

import useTotalRewards from '@hooks/useTotalRewards.ts';

interface PropsTasks {
    data: OfferTask;
}

const OfferCard = ({ data }: PropsTasks) => {
    // const {data} = props

    const { totalRewards } = useTotalRewards(data.tasks);

    return (
        <div className="offer-card">

            <div className="ico-56px">
                <img src={data.mainIco} alt={data.title} className="size-full" />
            </div>

            <div className="flex flex-col gap-2px grow">

                <h3 className="compact-350-accent">{data.title}</h3>

                <p className="subtitle">

                    {totalRewards}
                    {' '}
                    <span>
                        🧠
                    </span>

                </p>

            </div>

            <div className="ico-24px">
                <img src="src/assets/images/chevron-forward.svg" alt={data.title} className="size-full" />
            </div>
            <button type="button" className="absolute size-full inset-0 z-10" />
        </div>
    );
};

export default OfferCard;

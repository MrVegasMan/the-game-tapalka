import './boostersPage.scss';

import BoosterCard from '@components/Booster/BoosterCard.tsx';

function Boosters() {
    return (
        <div className="py-8 p-lr-spacing-100">

            <ul className="flex flex-col gap-4px">
                <li>
                    <BoosterCard
                        title="Game multiplier"
                        level={1}
                        description="You receive"
                        multiplier={1}
                        multiplierIco="🧠"
                        imageSrc="/src/assets/images/wojak.svg"

                    >
                        {/* Это будет в слоте */}
                        <button className="btn-booster compact-250-accent">
                            Upgrade
                        </button>
                    </BoosterCard>

                </li>

                <li>
                    <BoosterCard
                        title="Timer"
                        level={1}
                        description="You play once a day"
                        imageSrc="/src/assets/images/wojak.svg"

                    >
                        {/* Это будет в слоте */}
                        <button className="btn-booster compact-250-accent">
                            Upgrade
                        </button>
                    </BoosterCard>

                </li>
                <li>
                    <BoosterCard
                        title="Boost your taps"
                        level={1}
                        description="You receive"
                        multiplier={1}
                        multiplierIco="🫵"
                        imageSrc="/src/assets/images/wojak.svg"

                    >
                        {/* Это будет в слоте */}
                        <button className="btn-booster compact-250-accent">
                            Upgrade
                        </button>
                    </BoosterCard>

                </li>
            </ul>

        </div>
    );
}

export default Boosters;

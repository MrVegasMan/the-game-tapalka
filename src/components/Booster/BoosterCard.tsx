import './BoosterCard.scss';

import React, { ReactNode } from 'react';

interface BoosterCardProps {
    title: string;
    level: number;
    description: string;
    multiplier?: number;
    multiplierIco?: string;
    imageSrc: string;
    children?: ReactNode; // Это для слота
}

const BoosterCard: React.FC<BoosterCardProps> = ({
    title,
    level,
    multiplier,
    multiplierIco,
    description,
    imageSrc,
    children
}) => {
    return (
        <div className="booster-card text-left flex flex-row justify-between px-16 gap-12px relative">
            <div className="flex flex-col gap-6px py-20 z-10">

                <h3 className="compact-400-accent flex flex-row items-center">
                    {title}
                    <span
                        className="booster-card-lvl-w compact-300-accent-numeric px-10 py-5"
                    >
                        Lvl
                        {'\u00A0'}
                        {level}
                    </span>
                </h3>

                <p className="subtitle">
                    {description}
                    {' '}
                    {multiplier !== undefined && multiplierIco && (
                        <span>
                            x
                            {multiplier}
                            {' '}
                            {multiplierIco}
                        </span>
                    )}
                </p>

                <div className="booster-card__slot mt-10">
                    {children}
                    {' '}
                    {/* Слот для контента */}
                </div>

            </div>

            <img src={imageSrc} alt={title} className="booster-card__image" />

        </div>
    );
};

export default BoosterCard;

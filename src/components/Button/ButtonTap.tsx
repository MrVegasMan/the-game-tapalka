import './ButtonTap.scss';

import React, { useState } from 'react';

import BrainImg from '@assets/images/brain.png';
import WojakImg from '@assets/images/wojak.svg?bg';
import useAnimationsParticles from '@hooks/useAnimationsLoader.ts';

interface ButtonTapProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const particlesImages = {
    wojak: WojakImg,
    brain: BrainImg
};

export function ButtonTap({ onClick }: ButtonTapProps) {
    const [particlesImag, setParticlesImag] = useState<string>(Object.keys(particlesImages)[0]);
    const { generate } = useAnimationsParticles({ particlesCount: 15, images: particlesImages });

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        generate(particlesImag, event);
        if (onClick) {
            onClick(event);
        }
    };

    const handleToggle = (img: number) => {
        setParticlesImag(Object.keys(particlesImages)[img]);
    };

    return (
        <>
            <button
                className="tap-btn bg-brand-high bg-center bg-no-repeat rounded-full"
                onClick={handleClick}
            />
            <button
                className="absolute"
                onClick={() => handleToggle(1)}
            >
                change particles
            </button>
        </>
    );
}

import React, { useEffect, useState } from 'react';

export interface ParticlesOptions {
    particlesCount: number;
    images: Record<string, string>;
}

function useAnimationsParticles({ particlesCount, images }: ParticlesOptions) {
    const [amount, setAmount] = useState(particlesCount);

    function generate<K extends keyof ParticlesOptions['images']>(type: K, e: React.MouseEvent<HTMLElement>): void {
        const { clientX, clientY, target } = e;
        if (type && target && target instanceof HTMLElement) {
            if (clientX === 0 && clientY === 0) {
                const bbox = target.getBoundingClientRect();
                const x = bbox.left + (bbox.width * 2);
                const y = bbox.top + (bbox.height * 2);
                for (let i = 0; i < 30; i++) {
                    createParticle(x, y, type);
                }
            }
            else {
                for (let i = 0; i < amount; i++) {
                    createParticle(clientX, clientY, type);
                }
            }
        }
    }

    function createParticle<K extends keyof ParticlesOptions['images']>(x: number, y: number, type: K): void {
        if (!type) return;
        const particle = document.createElement('particle');
        document.body.appendChild(particle);

        const width = Math.floor((Math.random() * 130) + 8);
        const height = Math.floor((Math.random() * 130) + 8);
        const destinationX = (Math.random() - 0.5) * 600;
        const destinationY = (Math.random() - 0.5) * 600;
        const rotation = Math.random() * 320;
        const delay = Math.random() * 100;

        particle.style.width = `${width}px`;
        particle.style.height = `${height}px`;

        Object.keys(images).find((key) => {
            if (key === type) {
                particle.style.backgroundImage = `url(${images[key]})`;
            }
        });

        const animation = particle.animate(
            [
                {
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
                    opacity: 1
                },
                {
                    transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
                    opacity: 1
                },
                {
                    transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: (Math.random() * 100) + 3500,
                easing: 'cubic-bezier(0, .9, .57, 1)',
                delay: delay
            }
        );

        animation.onfinish = () => removeParticle(particle);
    }

    function removeParticle(particle?: HTMLElement): void {
        if (particle && particle instanceof HTMLElement) {
            particle.remove();
        }
    }

    useEffect(() => {
        return () => {
            removeParticle();
        };
    }, [amount]);

    return {
        generate,
        setAmount,
        removeParticle
    };
}

export default useAnimationsParticles;

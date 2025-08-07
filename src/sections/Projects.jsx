import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { useEffect } from 'react';

import { myProjects } from '../assets/constants/index.js';
import CanvasLoader from '../components/Loading.jsx';


const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    useEffect(() => {
        const animationStepDuration = 0.3;
        const gridSize = 7;
        const pixelSize = 100 / gridSize;
        const cards = document.querySelectorAll('[data-pixelated-image-reveal]');
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;

        cards.forEach((card) => {
            const pixelGrid = card.querySelector('[data-pixelated-image-reveal-grid]');
            const activeCard = card.querySelector('[data-pixelated-image-reveal-active]');

            const existingPixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
            existingPixels.forEach(pixel => pixel.remove());

            for (let row = 0; row < gridSize; row++) {
                for (let col = 0; col < gridSize; col++) {
                    const pixel = document.createElement('div');
                    pixel.classList.add('pixelated-image-card__pixel');
                    pixel.style.position = 'absolute';
                    pixel.style.width = `${pixelSize}%`;
                    pixel.style.height = `${pixelSize}%`;
                    pixel.style.left = `${col * pixelSize}%`;
                    pixel.style.top = `${row * pixelSize}%`;
                    pixel.style.background = '#ccc';
                    pixel.style.zIndex = 20;
                    pixelGrid.appendChild(pixel);
                }
            }

            const pixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
            const totalPixels = pixels.length;
            const staggerDuration = animationStepDuration / totalPixels;
            let isActive = false;
            let delayedCall;

            const animatePixels = (activate) => {
                isActive = activate;
                gsap.killTweensOf(pixels);
                if (delayedCall) delayedCall.kill();

                gsap.set(pixels, { display: 'none' });
                gsap.to(pixels, {
                    display: 'block',
                    duration: 0,
                    stagger: {
                        each: staggerDuration,
                        from: 'random'
                    }
                });

                delayedCall = gsap.delayedCall(animationStepDuration, () => {
                    if (activate) {
                        activeCard.style.display = 'block';
                        activeCard.style.pointerEvents = 'none';
                    } else {
                        activeCard.style.display = 'none';
                    }
                });

                gsap.to(pixels, {
                    display: 'none',
                    duration: 0,
                    delay: animationStepDuration,
                    stagger: {
                        each: staggerDuration,
                        from: 'random'
                    }
                });
            };

            if (isTouchDevice) {
                card.addEventListener('click', () => {
                    animatePixels(!isActive);
                });
            } else {
                card.addEventListener('mouseenter', () => {
                    if (!isActive) animatePixels(true);
                });
                card.addEventListener('mouseleave', () => {
                    if (isActive) animatePixels(false);
                });
            }
        });
    }, []);

    return (
        <section className="c-space my-20">
            <h3 className="head-text mb-5">My Selected Work</h3>
                <div className="flex flex-col gap-5 relative sm:p-10 m-16 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit bg-blue-200/30 rounded-2xl transition-transform duration-500 hover:rotate-[180deg]" style={currentProject.logoStyle}>
                        <img className="w-40 h-40 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>



        </section>
    );
};

export default Projects;
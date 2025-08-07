import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../assets/constants/index.js';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../assets/animations.js';


const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    useGSAP(() => {
        gsap.from('#history', {
            scrollTrigger: {
                trigger: '#history',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'expo.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'expo.inOut'
        })
    }, []);

    return (
        <section className="c-space my-20" id="history">
            <div className="w-full text-white-600">
                <p className="head-text mb-5">My Work Experience</p>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2 ">
                                        <div className="work-content_logo">
                                            <img className="w-22 h-18 rounded-full" src={item.icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800 ">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default WorkExperience;
import { clientReviews } from '../assets/constants/index.js';
import {useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {animateWithGsap} from "../assets/animations.js";

const Clients = () => {
    const [animationName, setAnimationName] = useState('idle');

    useGSAP(() => {
        gsap.from('#clients', {
            scrollTrigger: {
                trigger: '#clients',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'circ.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'circ.inOut'
        })
    }, []);
    return (
        <section className="c-space my-20" id="clients">
            <h3 className="head-text mb-5">Hear from My Clients</h3>

            <div className="client-container">
                {clientReviews.map((item) => (
                    <div key={`review-${item.id}`} className="client-review">
                        <div>
                            <p className="text-white-800 font-light">{item.review}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{item.name}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
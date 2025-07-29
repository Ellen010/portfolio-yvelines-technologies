import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../assets/animations.js';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    useGSAP(() => {
        gsap.from('#aboutme', {
            scrollTrigger: {
                trigger: '#aboutme',
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

    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <h3 className="head-text pb-2">About</h3>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div id="aboutme" >
                            <p className="grid-headtext g_fadeIn ">Hi, I’m Elena</p>
                            <p className="grid-subtext g_fadeIn"> <span className="text-white">  </span>
                                    With over 2 years of experience, I’ve sharpened my skills in both frontend and backend development,
                                    building dynamic, responsive, and user-focused websites.
                                    My portfolio showcases a wide range of work—from clean, classic HTML builds to creative animations using GSAP.</p>
                            <p className="grid-subtext g_fadeIn">My approach is always centered on the client’s goals.
                                    I adapt each project using the most recent and reliable technologies—whether
                                    it’s the latest Tailwind CSS features, modern JavaScript frameworks,
                                    or updated backend stacks—to ensure your website stays up-to-date, performant, and aligned with current trends.</p>
                            <p className="grid-subtext g_fadeIn">Client satisfaction is my top priority. I aim to make our collaboration smooth,
                                    transparent, and enjoyable for both sides, resulting in a product that not only works great but feels right.</p>
                        </div>
                    </div>
                </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                    <div id="aboutme">
                        <p className="grid-headtext g_fadeIn">Tech Stack</p>
                            <p className="grid-subtext g_fadeIn">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                        />
                    </div>
                    <div id="aboutme">
                            <p className="grid-headtext g_fadeIn">Flexibility</p>
                            <p className="grid-subtext g_fadeIn">I’m very flexible with time zone communications & locations. I&apos;m based in Paris, France and most of my projects are done remotely.</p>
                            <Button name="Contact Me" containerClass="w-full mt-10 hover:bg-red-800 hover:text-white transition-all duration-300" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yvelinestechnologies@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
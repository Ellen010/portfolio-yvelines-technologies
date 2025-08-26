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
                start: 'top 10%'
            },
            opacity: 1,
            scale: 1.2,
            duration: 2,
            ease: 'expoScale',
        });

        gsap.to('#aboutme', {
            opacity: 0,
            duration: 4,
            delay: 19
        });
        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 20,
            ease: 'circ.inOut',
            delay: 5.9
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
            <h3 className="head-text pb-2 mb-5">About</h3>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-fit">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain rounded-lg m-7" />

                        <div id="aboutme" >
                            <p className="grid-headtext g_fadeIn ">Hi, I’m Elena</p>
                            <p className="grid-subtext g_fadeIn"> <span className="text-white">  </span>
                                With solid professional experience, I’ve sharpened my skills in both frontend and backend development,
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
                    <img src="assets/grid2.png" alt="grid-2" className="w-full h-[300px] sm:h-[400px] object-contain pt-12" />

                    <div id="aboutme">
                        <p className="grid-headtext g_fadeIn">Tech Stack</p>
                            <p className="grid-subtext g_fadeIn">
                                With solid professional experience in full-stack development, I’ve built responsive and user-centered applications by combining technical depth with creative frontend design. My projects span web and mobile environments, focusing on performance, maintainability, and user experience. Below is a breakdown of the technologies and tools I’ve mastered throughout my journey:
                                <p className="grid-subtext g_fadeIn">
                                    <span className="text-white">Frontend Development: </span>
                                JavaScript (ES6+), TypeScript, Angular, React Native, Next.JS, Vue, Tailwind CSS, HTML5, CSS, GSAP, Vite, Expo, Framer Motion, Shadcn/ui, Aceternity UI
                                I specialize in creating fluid, interactive interfaces and animations, optimizing performance while maintaining accessibility and visual impact.
                                </p>
                                <p className="grid-subtext g_fadeIn">
                                <span className="text-white">Backend Development: </span>
                                Node.JS (JavaScript), Nest.JS, Express, PHP, Python, Redis, SQL/NoSQL, PostgreSQL, MongoDB
                                I develop secure, scalable APIs and services, with experience managing both relational and non-relational databases and integrating third-party services.
                                </p>
                                <p className="grid-subtext g_fadeIn">
                                <span className="text-white">Tools & Methodologies: </span>
                                Docker, Git, Redux, Sentry, GraphQL, Clean Code
                                I follow best practices in version control, testing, and containerization.
                                    My development approach emphasizes clean, modular code and efficient debugging.
                                </p>
                                <p className="grid-subtext g_fadeIn">
                                <span className="text-white">Soft Skills: </span>
                                Teamwork, Problem Solving, Critical Thinking, Project Management
                                Beyond coding, I excel in cross-functional collaboration, communicating technical ideas clearly, and managing project timelines effectively.
                                </p>

                            </p>
                        </div>
                    </div>
                </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center pt-12">
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
                            <p className="grid-subtext g_fadeIn">No matter where you are located, we gonna make it work.
                                My objective is to create the ultimate product that corresponds to your ambitions and goals.
                                I’m very flexible with time zone communications & locations.
                                Communication is performed via video calls, emails and personal online space created for each project.
                                Even if you are unfamiliar with technology, you will be guided step-by-step and at no moment you will feel disconnected or
                                unsure about the project progress. Keeping the client informed and updated via the personal online space is my priority.
                                I&apos;m based in Paris, France and most of my projects are done remotely.
                                For local clients in-face meetings are available.</p>
                            <Button name="Contact Me" containerClass="w-full mt-10 hover:bg-red-800 hover:text-white transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                                The best part about technology, is there is always something new that appears tomorrow. The game never gets boring,
                                thanks to the witty developer's mind that always create new code solutions. When they say that talent is build
                                with days and days of efforts, code is sharpened by written lines that function.
                                Throughout my develop journey I have wrote more than 1.5 million lines of code. And more and more repositories are to come.
                            </p>
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

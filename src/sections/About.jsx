import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    useGSAP(() => {
        gsap.fromTo(
            '.animatedText',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.25, ease: 'power2.out' }
        )
    }, [])

    const handleCopy = () => {
        navigator.clipboard.writeText('yvelinestechnologies@gmail.com')
        setHasCopied(true)
        setTimeout(() => setHasCopied(false), 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <h3 className="head-text mb-6">About</h3>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_1.4fr_1fr] gap-6 auto-rows-min">

                {/* ABOUT */}
                <div className="grid-container">
                    <img src="assets/grid1.png" alt="About" className="w-full h-[220px] object-cover rounded-xl pb-5"/>

                    <div className="space-y-4">
                        <p className="animatedText text-xl font-semibold text-white pt-5">Hi, I’m Elena</p>

                        <p className="animatedText project-desc">
                            With solid professional experience, I’ve sharpened my skills in both
                            frontend and backend development, building dynamic, responsive,
                            user-focused websites.
                        </p>

                        <p className="animatedText project-desc">
                            My approach is always centered on the client’s goals. I adapt each
                            project using modern, reliable technologies to keep products
                            performant, scalable, and future-proof.
                        </p>

                        <p className="animatedText project-desc">
                            Client satisfaction is my top priority. I aim for smooth,
                            transparent, and enjoyable collaboration.
                        </p>
                    </div>
                </div>

                {/* TECH STACK */}
                <div className="grid-container">
                    <img
                        src="assets/grid2.png"
                        alt="Tech stack"
                        className="w-full h-[260px] object-cover rounded-xl"
                    />

                    <div className="space-y-4 project-desc">
                        <p className="animatedText text-xl font-semibold pt-5">Tech Stack</p>

                        <p className="animatedText">
              <span className="text-white-500 font-semibold">
                Frontend:
              </span>{' '}
                            JavaScript, TypeScript, Angular, React Native, Next.js, Vue,
                            Tailwind CSS, HTML5, CSS, GSAP, Vite, Expo, Framer Motion,
                            Shadcn/ui, Aceternity UI
                        </p>

                        <p className="animatedText">
              <span className="text-white-500 font-semibold">
                Backend:
              </span>{' '}
                            Node.js, NestJS, Express, PHP, Python, Redis, PostgreSQL,
                            MongoDB
                        </p>

                        <p className="animatedText">
              <span className="text-white-500 font-semibold">
                Tools:
              </span>{' '}
                            Docker, Git, Redux, GraphQL, Sentry, Clean Code
                        </p>

                        <p className="animatedText">
              <span className="text-white-500 font-semibold">
                Soft Skills:
              </span>{' '}
                            Teamwork, Problem Solving, Critical Thinking, Project Management
                        </p>
                    </div>
                </div>

                {/* GLOBE + FLEXIBILITY */}
                <div className="grid-container">
                    <div className="flex justify-center items-center h-[320px]">
                        <Globe
                            height={300}
                            width={300}
                            backgroundColor="rgba(0,0,0,0)"
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[
                                {
                                    lat: 48.8566,
                                    lng: 2.3522,
                                    text: 'Paris, France',
                                    color: 'white',
                                    size: 14,
                                },
                            ]}
                        />
                    </div>

                    <div className="space-y-4">
                        <p className="animatedText text-xl font-semibold text-white pt-5">Flexibility</p>

                        <p className="animatedText project-desc pb-5">
                            No matter where you are located, we’ll make it work. I collaborate
                            remotely with clients worldwide, adapting to time zones and
                            workflows.
                        </p>

                        <Button
                            name="Contact Me"
                            containerClass="w-full hover:bg-red-800 hover:text-white transition-all duration-300"
                        />
                    </div>
                </div>

                {/* PASSION */}
                <div className="grid-container">
                    <img
                        src="assets/grid3.png"
                        alt="Passion"
                        className="w-full h-[200px] object-cover rounded-xl"
                    />

                    <div className="space-y-3 pt-5">
                        <p className="animatedText text-xl font-semibold text-white">
                            My Passion for Coding
                        </p>

                        <p className="animatedText project-desc">
                            Programming isn’t just my profession — it’s my passion. I love
                            solving problems, learning new technologies, and continuously
                            sharpening my craft.
                        </p>
                    </div>
                </div>

                {/* CONTACT */}
                <div className="grid-container">
                    <img
                        src="assets/grid4.png"
                        alt="Contact"
                        className="w-full h-[160px] object-cover rounded-xl"
                    />

                    <div className="space-y-3 text-center">
                        <p className="grid-subtext pt-5">Contact me</p>

                        <div
                            className="copy-container flex justify-center items-center gap-3 cursor-pointer"
                            onClick={handleCopy}
                        >
                            <img
                                src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                alt="copy"
                            />
                            <p className="font-medium text-white">
                                yvelinestechnologies@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
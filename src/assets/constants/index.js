export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Anna Simon',
        position: 'Director at Annas Business Consulting',
        img: 'assets/review1.jpg',
        review:
            'Working with Yvelines Technologies was a fantastic experience. My old website was transformed into a modern, user-friendly platform. Attention to details and commitment to quality during this project was unmatched. I highly recommend this company for any web dev projects.',
    },
    {
        id: 2,
        name: '3Degrees Inc',
        position: 'Owner',
        img: 'assets/project-logo1.png',
        review:
            'Yvelines Technologies helped our business to be present online and to attract more clients. Fast, efficient and top-notch service.',
    }
];

export const myProjects = [
    {
        title: '3Degrees - 3D Modeling Platform',
        desc: '3Degrees is a personalised website that represents a 3D models for model inspiration and private orders. Website has a modern and secure frontend user interface using Next.JS and TailwindCSS, delivering a refined and optimized user experience.',
        subdesc:
            'Implemented a CI/CD pipeline to automate the testing and deployment of a Next.js and TailwindCSS-based frontend, ensuring smooth and secure delivery of features.\n' +
            'Developed a responsive user interface with optimized performance and accessibility.\n' +
            'Created custom animations with Three.js and GSAP, integrating scroll triggers, staggered effects, timelines, and an interactive video slider.\n' +
            'Integrated Sentry for error monitoring and behavioral analytics, tracking loading times, click-through rates, and user engagement patterns to improve UX.',
        href: 'https://3degrees.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Financial Instruments Explained - Educational Web Timeline',
        desc: 'Types and Asset Classes.History of Stock Exchanges. \n' +
            ' "History of Stock Exchanges" is an interactive educational web page designed to showcase the global evolution of financial markets through a visually structured timeline.\n ' +
            'The project provides an informative and accessible resource for users to explore key milestones in the development of stock exchanges from the 17th century to 2024.',
        subdesc:
            'Built with semantic HTML and custom CSS, the project emphasizes accessibility, clarity, and responsive design. ' +
            'It features structured headings, lists, and multimedia elements—including an embedded historical image with captions—to support both visual and textual learning. The timeline is organized by century, guiding users through significant events such as the founding of the Amsterdam Stock Exchange, the rise of NASDAQ, and the emergence of AI-driven trading strategies.\n' +
            '\n' +
            'This static site highlights clean code architecture, effective use of HTML5 tags, and a strong understanding of content hierarchy.' +
            ' It’s ideal for educational platforms, financial literacy courses, and historical reference portals. Future iterations may include JavaScript for enhanced interactivity or integration with real-time financial APIs.',
        href: 'https://financial-instruments-explained.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'NoPestsAllowed',
        desc: 'NoPestsAllowed aim to provide worldwide application to centralize deposition about pests. Each deposition is verified by picture and user location. ' +
            'The Picture is geolocalised in order to define the deposition location. The picture must be a visual proof showing pests or many depositions against a place.',
        subdesc:
            'Developed a full-stack SaaS platform to centralize and verify pest infestation reports in residential and public spaces.' +
            'Built the frontend using Next.js, React Native, and Tailwind CSS. Designed a secure backend in Node.js, Express, and MongoDB, handling user authentication and real-time data management.\n' +
            'Implemented AI-powered verification, using image recognition and geolocation to assess the accuracy of user-submitted reports.\n' +
            'Integrated a deposition system, allowing users to submit reports with photos, descriptions, and geolocation metadata.\n' +
            'Ensured smooth state management with Redux, improving data consistency and user experience.\n' +
            'Developed a custom notification system, updating users on the status of their reports.',
        href: 'https://github.com/NoPestsAllowed',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'More info is coming soon',
        desc: 'More info is coming soon',
        subdesc:
            'More info is coming soon',
        href: 'More info is coming soon',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'More info is coming soon',
        desc: 'More info is coming soon',
        subdesc:
            'More info is coming soon',
        href: 'More info is coming soon',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: '3Degrees Inc',
        pos: 'Software Developer',
        duration: '2024 - Present',
        title: "3Degrees Inc. is an innovative startup inspired to bring the difference in 3D modeling, inform more people about 3D modeling and share new models and concepts.",
        icon: 'assets/project-logo1.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'NoPestsAllowed',
        pos: 'Software Developer- Full Stack ',
        duration: '2024',
        title: "NoPestsAllowed's aim is to provide worldwide application to centralize deposition about pests. Each deposition is verified by picture and user location. The Picture is geolocalised in order to define the deposition location. The picture must be a visual proof showing pests or many depositions against a place.",
        icon: 'assets/project-logo3.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Telus',
        pos: 'Data Analyst',
        duration: '',
        title: "Telus is an AI company that combines the power of human intelligence and high-quality data to design. It's goals to train and improve your AI models and applications.",
        icon: '/assets/project-logo001.png',
        animation: 'salute',
    },
];

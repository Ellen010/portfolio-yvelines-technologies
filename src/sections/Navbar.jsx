import { useState } from 'react';
import { navLinks } from '../assets/constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id}>
                <a  className="nav-li" href={item.href}  onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <img src="/logo.png" alt="logo" className="h-36 p-6 will-change-[filter] transition-[filter] duration-300 rounded-[2em]" />
                    <a href="/" className="text-neutral-400 font-monoton font-bold text-4xl hover:text-white transition-all duration-300 transform hover:scale-[1.25]">

                        Yvelines Technologies
                    </a>

                    <nav className="text-l hover:text-white transition-all duration-300 transform hover:scale-[1.15]">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="text-l hover:text-white transition-all duration-300 transform hover:scale-[1.25]">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>


        </header>
    );
};

export default Navbar;
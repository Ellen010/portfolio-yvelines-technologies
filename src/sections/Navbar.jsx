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
        <header className="navbar">
            <div className="nav-div">
                <div className="nav-top">
                    <img src="/logo.png" alt="logo" className="logo" />
                    <p  className="title">
                        New Digital Solutions
                    </p>

                    <nav className="nav-ul">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="nav-items">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
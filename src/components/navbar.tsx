import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 py-4 px-4 w-full fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl">
                    Youssef Arrassen
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className={`md:flex md:items-center space-x-4 uppercase ${isOpen ? 'block' : 'hidden'} md:block text-center md:text-left`}>
                    <a href="#experience" className="text-gray-300 hover:text-white block mt-4 md:inline-block md:mt-0">Experience</a>
                    <a href="#education" className="text-gray-300 hover:text-white block mt-4 md:inline-block md:mt-0">Education</a>
                    <a href="#features" className="text-gray-300 hover:text-white block mt-4 md:inline-block md:mt-0">Features</a>
                    <a href="#projects" className="text-gray-300 hover:text-white block mt-4 md:inline-block md:mt-0">Projects</a>
                    <a href="#skills" className="text-gray-300 hover:text-white block mt-4 md:inline-block md:mt-0">Skills</a>
                    <a href="#contact" className="text-gray-300 hover:text-white block mt-4 md:inline-block md:mt-0">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

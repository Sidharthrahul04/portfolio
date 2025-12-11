import React from 'react';
import { personalInfo } from '../data/personalData';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="nav-left">
                <span className="brand-mark">{personalInfo.initials}</span>
                <span className="nav-title">
                    {personalInfo.name}<span>{personalInfo.lastName}</span>
                </span>
            </div>
            <nav className="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;

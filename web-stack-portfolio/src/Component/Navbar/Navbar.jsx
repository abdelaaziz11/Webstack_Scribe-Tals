import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false); // New state for toggling class

    const [isOpen, setIsOpen] = useState(false);
    const toggeleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };

    const toggleSearchBox = () => {
        setIsSearchVisible(!isSearchVisible);
        setIsSearchActive(!isSearchActive); // Toggle active class
    };

    return (
        <header className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className="navbar">
                <div className="nav-item">
                    <div className="logo">
                        <Link to="/"><h2>Scribe Tales</h2></Link>
                    </div>
                    <ul className="nav-center">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                    </ul>
                    
                    <div className="darkLight-searchBox-login">
                        <div className="darkLight-searchBox">
                            <div 
                                className={`search-Box ${isSearchActive ? 'active' : ''}`} 
                                onClick={toggleSearchBox}
                            >
                                
                                <div className="searchToggle">
                                    <FontAwesomeIcon 
                                        icon={isSearchVisible ? faTimes : faSearch} 
                                        className='bx bx-search search'
                                    />
                                </div>
                                {/* {isSearchVisible && (
                                    <div className="search-field">
                                    
                                        <input type="text" placeholder="Search..." />
                                        <FontAwesomeIcon icon={faSearch} className='bx bx-search'/>
                                    
                                    </div>
                                )} */}
                            </div>
                            <div className="dark-light" onClick={toggleTheme}>
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className='bx bx-sun sun'/> 
                                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className='bx bx-moon moon'/>
                            </div>
                        </div>
                        <div className="login">
                            <Link to="/login">Login</Link>
                            
                        </div>
                        
                        

                        
                        <div className="menu-button">
                            <button onClick={toggeleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
                        </div>
                        {/* {isOpen && (
                            <ul className="sidebar">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><div className="login-menu">
                            <Link to="/login">Login</Link>
                            </div></li>
                            </ul>
                        )} */}
                        
                    </div>
                    {isOpen && (
                            <ul className="sidebar">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><div className="login-menu">
                            <Link to="/login">Login</Link>
                            </div></li>
                            
                            </ul>
                        )}
                </div>
                {isSearchVisible && (
                                    <div className="search-field">
                                    
                                        <input type="text" placeholder="Search..." />
                                        <FontAwesomeIcon icon={faSearch} className='bx bx-search'/>
                                    
                                    </div>
                                )}
            </div> 
            <br/>
            <hr/>
            
        </header>
    );
};

export default Navbar;
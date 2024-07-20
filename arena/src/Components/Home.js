import React, {useEffect, useState} from "react";
import '../Styles/arena.css';
import '../index.css'
import pic from '../assets/Logoalts.png'


const Home = () => {

    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);


    useEffect(() => {
        const stickyNav = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', stickyNav);
        return () => {
            window.removeEventListener('scroll', stickyNav);
        };
    }, []);


    const sectionIds = ['home', 'about', 'services', 'skills', 'testimonies', 'contact', 'footer'];

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 97;
        const activeId = sectionIds.reduce((prevId, currId) => {
            const element = document.getElementById(currId);
            if (element.offsetTop <= scrollPosition) {
                return currId;
            } else {
                return prevId;
            }
        }, 'home');
        setActiveSection(activeId);
        localStorage.setItem('lastSection', activeId);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }


    return (
        <div>


            <header className={isSticky ? 'sticky' : ''}>
                <div className="logo"><img src={pic} alt="Logo"/></div>
                <ul className={`navlist ${isOpen ? 'open' : ''}`}>
                    <li onClick={closeMenu}><a href="#home" className={activeSection === 'home' ? 'active' : ''} style={{ '--i': '1' }}>Home</a></li>
                    <li onClick={closeMenu}><a href="#about" className={activeSection === 'about' ? 'active' : ''} style={{ '--i': '2' }}>About</a></li>
                    <li onClick={closeMenu}><a href="#services" className={activeSection === 'services' ? 'active' : ''} style={{ '--i': '3' }}>Services</a></li>
                    <li onClick={closeMenu}><a href="#testimonies" className={activeSection === 'testimonies' ? 'active' : ''} style={{ '--i': '6' }}>Reviews</a></li>
                    <li onClick={closeMenu}><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} style={{ '--i': '7' }}>Contact</a></li>
                    <li onClick={closeMenu}><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} style={{ '--i': '4' }}><i class='bx bxs-cart' style={{fontSize: '23px'}}></i></a></li>
                </ul>
                <div id="menu-icon" className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} onClick={toggleMenu}></div>
            </header>

        </div>
    );
};

export default Home;
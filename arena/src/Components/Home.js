import React, { useEffect, useState } from "react";
import '../Styles/arena.css';
import '../index.css';
import pic from '../assets/Logoalts.png';
import home from '../assets/arenaGraphics.png'
import ScrollReveal from "scrollreveal";


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


    const sectionIds = ['home'];

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

    const sr = ScrollReveal ({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    })

    sr.reveal(".hero-text", {delay:200, origin:'top'});
    sr.reveal(".hero-img", {delay:450, origin:'top'});

    


    return (
        <div>


            <header className={isSticky ? 'sticky' : ''}>
                <div className="logo"><img src={pic} alt="Logo" /></div>
                <ul className={`navlist ${isOpen ? 'open' : ''}`}>
                    <li onClick={closeMenu}><a href="#home" className={activeSection === 'home' ? 'active' : ''} style={{ '--i': '1' }}>Home</a></li>
                    <li onClick={closeMenu}><a href="#about" className={activeSection === 'about' ? 'active' : ''} style={{ '--i': '2' }}>About</a></li>
                    <li onClick={closeMenu}><a href="#services" className={activeSection === 'services' ? 'active' : ''} style={{ '--i': '3' }}>Services</a></li>
                    <li onClick={closeMenu}><a href="#testimonies" className={activeSection === 'testimonies' ? 'active' : ''} style={{ '--i': '6' }}>Reviews</a></li>
                    <li onClick={closeMenu}><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} style={{ '--i': '7' }}>Contact</a></li>
                    <li onClick={closeMenu} className="cart"><a href="#cart" className={activeSection === 'cart' ? 'active' : ''} style={{ '--i': '4' }}><i class='bx bxs-cart' style={{ fontSize: '23px' }}></i></a></li>
                </ul>
                    <div id="menu-icon" className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} onClick={toggleMenu}></div>
            </header>

            {/* ------------------home section------------------- */}

            <section className="hero" id="home">
                <div className="hero-text">
                    <h5>#3 Trending</h5>
                    <h4>Lead Supercell</h4>
                    <h1>GOBLINS</h1>
                    <p>Join millions of gamers as they explore gaming tools and feel confident while gaming!.</p>
                    <a href="#">Explore</a>
                    <a href="#" className="ctaa"><i className='bx bx-play'></i>Watch Triller</a>
                </div>

                <div className="hero-img">
                    <img src={home}></img>
                </div>
            </section>

            <div className="icons">
                <a href=""><i className='bx bxs-user-account'></i></a>
                <a href=""><i className='bx bxs-log-in-circle'></i></a>
                <a href=""><i className='bx bx-help-circle'></i></a>
            </div>

            <div className="scroll-down">
                <a href="#"><i className='bx bx-chevrons-down'></i></a>
            </div>

        </div>
    );
};

export default Home;
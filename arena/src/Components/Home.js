import React, { useEffect, useState } from "react";
import '../Styles/arena.css';
import '../index.css';
import pic from '../assets/Logoalts.png';
import home from '../assets/arenaGraphics.png';
import about from '../assets/aboutImg.png';
import ScrollReveal from "scrollreveal";
import '@fortawesome/fontawesome-free/css/all.min.css';



const Home = () => {


    const [activeSection, setActiveSection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    // ----------------------------sticky navbar javascript--------------------------------

    useEffect(() => {
        const stickyNav = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', stickyNav);
        return () => {
            window.removeEventListener('scroll', stickyNav);
        };
    }, []);

    // -------------------------------active scroll sections-------------------------------

    const sectionIds = ['home', 'about'];

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


    // -------------------------------------Toggle Menu handler---------------------------------

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    // ----------------------------------content reveal animation---------------------------

    useEffect(() => {

        const sr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 450,
            reset: true
        });
        sr.reveal(".hero-text", { delay: 200, origin: 'top' });
        sr.reveal(".hero-img", { delay: 450, origin: 'top' });
    }, []);

    useEffect(() => {

        const hr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 450,
            reset: true
        });
        hr.reveal(".about-text", { delay: 200, origin: 'top' })
        hr.reveal(".about-img", { delay: 450, origin: 'top' });
    }, []);

    //------------------------------------paralax---------------------------- //

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add a delay (e.g., 500ms) to allow the preloader to finish
        setTimeout(() => {
            setShowContent(true);
        }, 300); // 5.6 seconds in milliseconds
    }, []);


    return (
        <div className={`content ${showContent ? 'fade-in' : ''}`}>


            <header className={isSticky ? 'sticky' : ''}>
                <div className="logo"><img src={pic} alt="Logo" /></div>
                <ul className={`navlist ${isOpen ? 'open' : ''}`}>
                    <li onClick={closeMenu}><a href="#home" className={activeSection === 'home' ? 'active' : ''} style={{ '--i': '1' }}>Home</a></li>
                    <li onClick={closeMenu}><a href="#about" className={activeSection === 'about' ? 'active' : ''} style={{ '--i': '2' }}>About</a></li>
                    <li onClick={closeMenu}><a href="#services" className={activeSection === 'services' ? 'active' : ''} style={{ '--i': '3' }}>Services</a></li>
                    <li onClick={closeMenu}><a href="#testimonies" className={activeSection === 'testimonies' ? 'active' : ''} style={{ '--i': '4' }}>Reviews</a></li>
                    <li onClick={closeMenu}><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} style={{ '--i': '5' }}>Contact</a></li>
                    <li onClick={closeMenu} className="cart"><a href="#cart" className={activeSection === 'cart' ? 'active' : ''} style={{ '--i': '6' }}><i class='bx bxs-cart' style={{ fontSize: '23px' }}></i></a></li>
                </ul>
                <div id="menu-icon" className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} onClick={toggleMenu}></div>
            </header>

            {/* ------------------home section------------------- */}

            <section className="hero" id="home">
                <div className="hero-text">
                    <h5>#3 Trending</h5>
                    <h4>Lead Supercell</h4>
                    <h1>GUNBLADE</h1>
                    <p>Join millions of gamers as they explore gaming tools and feel confident while gaming!.</p>
                    <a href="#explore">Explore</a>
                    <a href="#" className="ctaa"><i className='bx bx-play'></i>Watch Triller</a>
                </div>

                <div className="hero-img">
                    <img src={home} alt="Logo"></img>
                </div>
            </section>

            <div className="icons">
                <a href=""><i className='bx bxs-user-account'></i></a>
                <a href=""><i className='bx bxs-log-in-circle'></i></a>
                <a href=""><i className='bx bx-help-circle'></i></a>
            </div>

            <div className="scroll-down">
                <a href="#explore"><i className='bx bx-chevrons-down'></i></a>
            </div>

            <section className="logo-section" id="explore">
                <i className="fas fa-gamepad"></i>
                <h1>The Gamer's Zone</h1>
            </section>

            {/* -----------------------explore section--------------- */}

            <section className="explore" id="explore">
                <div className="wrapper1">
                    <h1>Gaming Tools</h1>
                    <br></br>
                    <div className="explore-1-img">
                        <a href="cart"><div className="img img-1"></div></a>
                        <a href="#"><div className="img img-2"></div></a>
                        <a href="#"><div className="img img-3"></div></a>
                        <a href="#"><div className="img img-4"></div></a>
                        <a href="#"><div className="img img-5"></div></a>
                        <a href="#"><div className="img img-6"></div></a>
                        <a href="#"><div className="img img-7"></div></a>
                        <a href="#"><div className="img img-8"></div></a>
                    </div>
                </div>

                <div className="game-categories">
                    <h1>GAME CATEGORIES</h1>
                    <div className="game-wrapper">
                        <a href="shop"><div className="gw gw-1"></div></a>
                        <a href="shop"><div className="gw gw-2"></div></a>
                        <a href="shop"><div className="gw gw-3"></div></a>
                        <a href="shop"><div className="gw gw-4"></div></a>
                        <a href="shop"><div className="gw gw-5"></div></a>
                    </div>
                </div>

                <div className="game-categories left">
                    <div className="game-wrapper">
                        <a href="shop"><div className="gw gw-6"></div></a>
                        <a href="shop"><div className="gw gw-7"></div></a>
                        <a href="shop"><div className="gw gw-8"></div></a>
                        <a href="shop"><div className="gw gw-9"></div></a>
                        <a href="shop"><div className="gw gw-10"></div></a>
                    </div>
                </div>
            </section>

            <section className="explore-2">
                <h1>Popular Stars</h1>
                <div className="players">
                    <div className="p-image p-image-1"></div>
                    <span>Valentino Rossi</span>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="players">
                    <div className="p-image p-image-2"></div>
                    <span>Anthony Joshua</span>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="players">
                    <div className="p-image p-image-3"></div>
                    <span>Tyler Pharris</span>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="players">
                    <div className="p-image p-image-4"></div>
                    <span>Quadri Aruna</span>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </section>

            {/* --------------------------------about section---------------- */}

            <section className="about" id="about">
                <div className="about-img">
                    <img src={about} alt="logo"></img>
                </div>

                <div className="about-text">
                    <span>About Us</span>
                    <h2>Fuel Your Game <br /> Elevate Your Fun </h2>
                    <p>At <cite>ARENA</cite> we'er passionate about gaming. We're gamers, just like You.
                        Our mission is to connect you with the best gear, expert advice, and a community that shares your passion.
                        Trust us to elevate your gaming experience</p>
                    <a href="shop" id="shop" className="ctaa"><i class='bx bx-chevrons-right'></i>Shop</a>
                </div>
            </section>

        </div>
    );
};

export default Home;
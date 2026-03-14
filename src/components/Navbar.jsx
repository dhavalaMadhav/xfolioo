import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../assets/xfolioo.png';
import './Navbar.css';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu whenever location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If scrolling down and we aren't at the very top, hide the navbar
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            // If scrolling up, show the navbar
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`nav-outer ${isVisible ? '' : 'nav-hidden'}`}>
            <nav>
                <div className="nav-inner">
                    <Link to="/" className="logo">
                        <img src={logo} alt="XFOLIOO logo" className="logo-img" />
                    </Link>
                    <ul className="nav-links">
                        <li><NavLink to="/" end data-text="Home"><span>Home</span></NavLink></li>
                        <li><NavLink to="/people" data-text="Our People"><span>Our People</span></NavLink></li>
                        <li><NavLink to="/workshops" data-text="Workshops"><span>Workshops</span></NavLink></li>
                        <li><NavLink to="/contact" data-text="Contact"><span>Contact</span></NavLink></li>
                        <li><NavLink to="/privacy" data-text="Privacy"><span>Privacy</span></NavLink></li>
                    </ul>
                    <div className="nav-actions">
                        <Link to="/login" className="nav-cta-btn nav-cta-standalone desktop-cta">
                            <span className="roll-text" data-text="Client Login"><span>Client Login</span></span> <ArrowUpRight size={16} strokeWidth={2.5} />
                        </Link>
                        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        <li><NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/people" onClick={() => setIsMobileMenuOpen(false)}>Our People</NavLink></li>
                        <li><NavLink to="/workshops" onClick={() => setIsMobileMenuOpen(false)}>Workshops</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink></li>
                        <li><NavLink to="/privacy" onClick={() => setIsMobileMenuOpen(false)}>Privacy</NavLink></li>
                    </ul>
                    <div className="mobile-menu-footer">
                        <Link to="/contact" className="btn-black" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

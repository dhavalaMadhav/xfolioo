import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/xfolioo.png';
import './Navbar.css';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                    <Link to="/login" className="nav-cta-btn nav-cta-standalone">
                        Client Login <ArrowUpRight size={16} strokeWidth={2.5} />
                    </Link>
                </div>
            </nav>
        </div>
    );
}

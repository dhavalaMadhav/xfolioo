import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/xfolioo.png';
import './Navbar.css';

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const darkSections = document.querySelectorAll('.about, .footer');
            let currentlyDark = false;
            // header is roughly at top: 0 to 100px. Check 50px line.
            const navCenterY = 50;

            darkSections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
                    currentlyDark = true;
                }
            });

            setIsDark(currentlyDark);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`nav-outer ${isDark ? 'nav-dark' : ''}`}>
            <nav>
                <div className="nav-inner">
                    <Link to="/" className="logo">
                        <img src={logo} alt="XFOLIOO logo" className="logo-img" />
                    </Link>
                    <ul className="nav-links">
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/people">Our People</NavLink></li>
                        <li><NavLink to="/workshops">Workshops</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/privacy">Privacy</NavLink></li>
                    </ul>
                    <Link to="/login" className="nav-cta-btn nav-cta-standalone">
                        Client Login <ArrowUpRight size={16} strokeWidth={2.5} />
                    </Link>
                </div>
            </nav>
        </div>
    );
}

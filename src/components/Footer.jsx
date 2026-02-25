import { Link } from 'react-router-dom';
import logo from '../assets/xfolioo.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-col brand-col">
                    <Link to="/" className="f-logo">
                        <img src={logo} alt="XFOLIOO logo" className="f-logo-img" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                    </Link>
                    <p className="f-desc">Independent wealth management firm providing evidence-based advisory and structuring for long-term real wealth creation.</p>
                </div>
                <div className="f-col">
                    <h4>Navigate</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/people">Our People</Link></li>
                        <li><Link to="/workshops">Workshops</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Client Login</Link></li>
                        <li><Link to="/privacy">Privacy</Link></li>
                    </ul>
                </div>
                <div className="f-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Mutual Funds</a></li>
                        <li><a href="#">PMS Services</a></li>
                        <li><a href="#">AIFs</a></li>
                        <li><a href="#">Goal-Based Planning</a></li>
                        <li><a href="#">Tax Planning</a></li>
                        <li><a href="#">Estate Planning</a></li>
                    </ul>
                </div>
                <div className="f-col">
                    <h4>Contact</h4>
                    <div className="f-contact-item">
                        <div className="f-label">Address</div>
                        <div className="f-val">Wework Prestige Atlanta<br />No 10/12, 80 Feet Main Road<br />1A Block, Koramangala<br />Bangalore, KA – 560034</div>
                    </div>
                    <div className="f-contact-item">
                        <div className="f-label">Phone</div>
                        <a href="tel:+919618521123">+91 96185 21123</a>
                        <a href="tel:+919611688851">+91 96116 88851</a>
                    </div>
                    <div className="f-contact-item">
                        <div className="f-label">Email</div>
                        <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a>
                        <a href="mailto:shahul@xfolioo.com">shahul@xfolioo.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 XFOLIOO Investor Services LLP. All rights reserved.</p>
                <p>AMFI Reg. No: 312814 &nbsp;·&nbsp; Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.</p>
            </div>
        </footer>
    );
}

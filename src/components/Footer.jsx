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
                        <li><Link to="/"><span className="roll-text" data-text="Home"><span>Home</span></span></Link></li>
                        <li><Link to="/people"><span className="roll-text" data-text="Our People"><span>Our People</span></span></Link></li>
                        <li><Link to="/workshops"><span className="roll-text" data-text="Workshops"><span>Workshops</span></span></Link></li>
                        <li><Link to="/contact"><span className="roll-text" data-text="Contact"><span>Contact</span></span></Link></li>
                        <li><Link to="/login"><span className="roll-text" data-text="Client Login"><span>Client Login</span></span></Link></li>
                        <li><Link to="/privacy"><span className="roll-text" data-text="Privacy"><span>Privacy</span></span></Link></li>
                    </ul>
                </div>
                <div className="f-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#"><span className="roll-text" data-text="Mutual Funds"><span>Mutual Funds</span></span></a></li>
                        <li><a href="#"><span className="roll-text" data-text="PMS Services"><span>PMS Services</span></span></a></li>
                        <li><a href="#"><span className="roll-text" data-text="AIFs"><span>AIFs</span></span></a></li>
                        <li><a href="#"><span className="roll-text" data-text="Goal-Based Planning"><span>Goal-Based Planning</span></span></a></li>
                        <li><a href="#"><span className="roll-text" data-text="Tax Planning"><span>Tax Planning</span></span></a></li>
                        <li><a href="#"><span className="roll-text" data-text="Estate Planning"><span>Estate Planning</span></span></a></li>
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

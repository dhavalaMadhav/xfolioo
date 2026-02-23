import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Calendar, Presentation,
    Award, Shield, Brain, TrendingUp,
    Handshake, BarChart2, Leaf,
    Target, Scale, ArrowRight
} from 'lucide-react';
import './Home.css';

/* â”€â”€ Scroll-driven horizontal trust bar â”€â”€ */
function TrustBar() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onScroll = () => {
            // map window scrollY â†’ horizontal translate of the items
            // negative = scroll right when user scrolls down, positive = left when scroll up
            const shift = window.scrollY * 1.5;
            track.style.transform = `translateX(-${shift}px)`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const items = [
        { icon: <Award size={20} />, label: '37+ Combined Years of Experience' },
        { icon: <Shield size={20} />, label: 'AMFI Registered Distributor' },
        { icon: <Brain size={20} />, label: 'Evidence-Based Advisory' },
        { icon: <TrendingUp size={20} />, label: 'Behaviour-Focused Guidance' },
        { icon: <Award size={20} />, label: '37+ Combined Years of Experience' },
        { icon: <Shield size={20} />, label: 'AMFI Registered Distributor' },
        { icon: <Brain size={20} />, label: 'Evidence-Based Advisory' },
        { icon: <TrendingUp size={20} />, label: 'Behaviour-Focused Guidance' },
    ];

    return (
        <div className="trust-bar">
            <div className="trust-track" ref={trackRef}>
                {items.map((item, i) => (
                    <div className="trust-item" key={i}>
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const aboutRef = useRef(null);
    const snakeRef = useRef(null);

    useEffect(() => {
        const about = aboutRef.current;
        const snake = snakeRef.current;
        if (!about || !snake) return;

        const snakeLength = snake.getTotalLength();
        snake.style.strokeDasharray = snakeLength;
        snake.style.strokeDashoffset = snakeLength;

        const onScroll = () => {
            const rect = about.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Map the scroll progress of the section to the drawing of the stroke
            let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            progress = Math.max(0, Math.min(1, progress));

            snake.style.strokeDashoffset = snakeLength * (1 - progress);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial state
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <main>
            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <h1>
                        <span className="title-quote">&ldquo;</span>The Fastest Way to Get Rich
                        <br />is to <span className="accent">Go Slow.<span className="title-quote">&rdquo;</span></span>
                    </h1>
                    <p>We are a personal investment services firm dedicated to helping families reach their financial goals through disciplined, long-term wealth creation strategies.</p>
                    <div className="hero-btns">
                        <Link to="/contact" className="hero-btn hero-btn-primary">
                            <Calendar size={18} /> Schedule an Expert Call
                        </Link>
                        <Link to="/workshops" className="hero-btn hero-btn-ghost">
                            Explore Workshops <ArrowRight size={18} className="btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* TRUST BAR â€” scroll driven */}
            <TrustBar />

            {/* ABOUT */}
            <section className="about" ref={aboutRef}>
                {/* DYNAMIC FINTECH BACKGROUND */}
                <div className="about-bg">
                    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="about-svg">
                        {/* Market stock snake line (single zigzag, rounded corners) */}
                        <path
                            ref={snakeRef}
                            className="snake-line"
                            d="M -50 450 L 400 150 L 800 450 L 1250 100"
                            fill="none"
                            stroke="rgba(241, 204, 213, 0.08)" /* Pink from the palette, very low opacity */
                            strokeWidth="100"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className="section-inner" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="about-layout">
                        {/* Left Sidebar matching the reference list */}
                        <div className="about-sidebar">
                            <ul className="about-tabs">
                                <li className="active">37+ Years Exp.</li>
                                <li>1000+ Investors</li>
                                <li>Inst. Rigour</li>
                            </ul>
                        </div>

                        {/* Right Main Content */}
                        <div className="about-main">
                            <div className="about-head">
                                <h2 className="about-title">Built on Experience &amp; Driven by Trust.</h2>
                                <p className="about-sub">Over 37 years of combined capital markets experience, channelled into a single, focused mission &mdash; long-term wealth creation for Indian families.</p>
                            </div>

                            <div className="about-cards-grid">
                                <div className="about-card">
                                    <h3>Trust-Based Advisory</h3>
                                    <p>Your interests come first. Every recommendation is driven by your goals, not commissions.</p>
                                    <Link to="/people" className="about-explore">EXPLORE <ArrowRight size={14} /></Link>
                                </div>
                                <div className="about-card">
                                    <h3>Evidence-Based</h3>
                                    <p>Strategies built on data, research, and decades of market observation to guide growth.</p>
                                    <Link to="/people" className="about-explore">EXPLORE <ArrowRight size={14} /></Link>
                                </div>
                                <div className="about-card">
                                    <h3>Behaviour-Focused</h3>
                                    <p>90% of performance comes from investor behaviour. We coach discipline and patience for long-term compounding.</p>
                                    <Link to="/people" className="about-explore">EXPLORE <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="services">
                <div className="section-inner">
                    <div className="section-head section-head-lined">
                        <h2 className="section-title title-custom-font">What We Do</h2>
                        <p className="section-sub">Comprehensive solutions for every stage of your wealth journey &mdash; structured, transparent, and truly personalised.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-card-header">
                                <span className="service-icon"><TrendingUp size={24} /></span>
                                <span className="service-card-label">Investment Solutions</span>
                            </div>
                            <div className="service-card-body">
                                <h3 className="service-title">Mutual Funds, PMS &amp; AIFs</h3>
                                <hr className="service-divider" />
                                <ul className="service-list">
                                    <li>Access and manage Mutual Funds</li>
                                    <li>Portfolio Management Services (PMS)</li>
                                    <li>Alternative Investment Funds (AIFs)</li>
                                    <li>Matched precisely to your risk profile</li>
                                </ul>
                                <Link to="/contact" className="service-link">Get Started <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-header">
                                <span className="service-icon"><Target size={24} /></span>
                                <span className="service-card-label">Goal-Based Planning</span>
                            </div>
                            <div className="service-card-body">
                                <h3 className="service-title">Plan for Every Milestone</h3>
                                <hr className="service-divider" />
                                <ul className="service-list">
                                    <li>Child's education planning</li>
                                    <li>Dream home financing</li>
                                    <li>Secure retirement structuring</li>
                                    <li>Aligned to specific timelines</li>
                                </ul>
                                <Link to="/contact" className="service-link">Plan Your Goals <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-header">
                                <span className="service-icon"><Scale size={24} /></span>
                                <span className="service-card-label">Specialised Services</span>
                            </div>
                            <div className="service-card-body">
                                <h3 className="service-title">Tax, Estate &amp; Will Planning</h3>
                                <hr className="service-divider" />
                                <ul className="service-list">
                                    <li>Comprehensive tax planning</li>
                                    <li>Estate structuring solutions</li>
                                    <li>Professional will drafting</li>
                                    <li>Handled by qualified experts</li>
                                </ul>
                                <Link to="/contact" className="service-link">Learn More <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINANCIAL LITERACY */}
            <section className="literacy">
                <div className="section-inner">
                    <div className="section-head section-head-lined">
                        <span className="section-tag">Financial Literacy</span>
                        <h2 className="section-title title-custom-font title-huge">India's Wealth is Trapped in the Wrong Places</h2>
                        <p className="section-sub">Most Indian households are unknowingly losing purchasing power to inflation every year.</p>
                    </div>
                    <div className="about-cards-grid literacy-cards-grid">
                        <div className="about-card literacy-card">
                            <div className="s-num">85%</div>
                            <p>of Indian household investments sit in fixed deposits &mdash; safe on paper, but silently eroding real wealth.</p>
                        </div>
                        <div className="about-card literacy-card">
                            <div className="s-num">72%</div>
                            <p>of household wealth is in low-yielding assets that barely beat inflation, leaving families financially exposed.</p>
                        </div>
                        <div className="about-card literacy-card">
                            <div className="s-num">&lt;5%</div>
                            <p>allocated to capital markets &mdash; the one asset class with genuine long-term wealth creation potential.</p>
                        </div>
                    </div>
                    <div className="lit-message">
                        <strong>The real risk is not investing</strong> â€” it is the long-term erosion of wealth that comes from staying on the sidelines. Inflation silently diminishes the value of idle money, year after year.
                    </div>
                    <div className="literacy-cta">
                        <Link to="/contact" className="btn-white"><Calendar size={18} /> Schedule an Expert Call</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

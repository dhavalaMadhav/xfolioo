import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Calendar, Presentation,
    Award, Shield, Brain, TrendingUp,
    Handshake, BarChart2, Leaf,
    Target, Scale, ArrowRight
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
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

    // Initialize global scroll reveal observer for this page
    useScrollReveal();

    useEffect(() => {
        const about = aboutRef.current;
        const snake = snakeRef.current;
        if (!about || !snake) return;

        const snakeLength = snake.getTotalLength();
        snake.style.strokeDasharray = snakeLength;
        snake.style.strokeDashoffset = snakeLength;

        const onScroll = () => {
            if (about) {
                const rect = about.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                progress = Math.max(0, Math.min(1, progress));
                snake.style.strokeDashoffset = snakeLength * (1 - progress);
            }

            const targets = document.querySelectorAll('.animate-line');
            const windowHeight = window.innerHeight;
            targets.forEach(target => {
                const rect = target.getBoundingClientRect();
                // We want the line to start growing when it enters the bottom of the screen
                // and be fully grown by the time it reaches the middle/top of the screen.
                // We map progress 0 (bottom of screen) to 1 (top of screen).
                let progress = (windowHeight - rect.top) / windowHeight;

                // Fine-tuning the feel: Starts scaling exactly when visible, fully scaled at 20% from bottom
                progress = (progress * 1.5) - 0.2;
                progress = Math.max(0, Math.min(1, progress));

                // We inject a CSS variable so each line tracks its own independent scrub progress
                target.style.setProperty('--scroll-scale', progress.toFixed(3));
            });

            // Flip animation for Service Cards
            const flipCards = document.querySelectorAll('.service-flip-wrapper');
            flipCards.forEach(wrap => {
                const rect = wrap.getBoundingClientRect();
                // Map progress so it takes less scrolling to fully flip
                // It fully flips when it reaches 60% up from the bottom of the screen
                let progress = (windowHeight - rect.top) / (windowHeight * 0.6);
                progress = Math.max(0, Math.min(1, progress));

                const flip = 1 - progress; // goes from 1 (flipped) to 0 (normal)
                // We rotate on Y deeply (180deg) and add a slight Z tilt (10deg)
                // It un-flips as you scroll down
                wrap.style.transform = `perspective(1200px) rotateY(${flip * -180}deg) rotateZ(${flip * 10}deg) scale(${0.8 + progress * 0.2})`;
                // Smooth fade inward
                wrap.style.opacity = progress;
            });
        };

        // const lineObserver = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('is-visible');
        //         }
        //     });
        // }, { threshold: 0.25 });

        // const targets = document.querySelectorAll('.animate-line');
        // targets.forEach(target => lineObserver.observe(target));

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial state
        return () => {
            window.removeEventListener('scroll', onScroll);
            // lineObserver.disconnect();
        };
    }, []);

    return (
        <main>
            {/* HERO */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-content">
                        <h1 className="scroll-reveal">
                            <span className="title-quote">&ldquo;</span>The Fastest Way to Get Rich
                            <br />is to <span className="accent">Go Slow.<span className="title-quote">&rdquo;</span></span>
                        </h1>
                        <p className="scroll-reveal delay-1">We are a personal investment services firm dedicated to helping families reach their financial goals through disciplined, long-term wealth creation strategies.</p>
                        <div className="hero-btns scroll-reveal delay-2">
                            <Link to="/contact" className="hero-btn hero-btn-primary">
                                <Calendar size={18} /> Schedule an Expert Call
                            </Link>
                            <Link to="/workshops" className="hero-btn hero-btn-ghost">
                                Explore Workshops <ArrowRight size={18} className="btn-arrow" />
                            </Link>
                        </div>
                    </div>
                    <div className="hero-graphic scroll-reveal delay-3">
                        <div className="brace-container">
                            {/* SVG Definitions for Gradients */}
                            <svg width="0" height="0" className="brace-defs">
                                <defs>
                                    <linearGradient id="brace-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--c-primary-light)" />
                                        <stop offset="50%" stopColor="var(--c-primary)" />
                                        <stop offset="100%" stopColor="var(--c-primary-dark)" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Left Solid Brace */}
                            <svg viewBox="0 0 150 400" className="solid-brace left-brace" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                {/* Solid 40px thick curve */}
                                <path d="M 130,20 C 70,20 60,70 60,110 L 60,160 C 60,190 40,200 20,200 C 40,200 60,210 60,240 L 60,290 C 60,330 70,380 130,380" fill="none" stroke="url(#brace-gradient)" strokeWidth="40" strokeLinecap="round" />
                            </svg>

                            <div className="brace-content">
                                <div className="brace-badge">Long-term Focus</div>
                                <h2>For investors<br /><span className="brace-sub">Achieve true wealth</span></h2>
                                <Link to="/contact" className="brace-btn">Start Planning</Link>
                            </div>

                            {/* Right Solid Brace */}
                            <svg viewBox="0 0 150 400" className="solid-brace right-brace" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                {/* Solid 40px thick curve */}
                                <path d="M 20,20 C 80,20 90,70 90,110 L 90,160 C 90,190 110,200 130,200 C 110,200 90,210 90,240 L 90,290 C 90,330 80,380 20,380" fill="none" stroke="url(#brace-gradient)" strokeWidth="40" strokeLinecap="round" />
                            </svg>
                        </div>
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
                            <div className="about-head scroll-reveal">
                                <h2 className="about-title title-white animate-line">Built on Experience &amp; Driven by Trust.</h2>
                                <p className="about-sub">Over 37 years of combined capital markets experience, channelled into a single, focused mission &mdash; long-term wealth creation for Indian families.</p>
                            </div>

                            <div className="about-cards-grid">
                                <div className="about-card scroll-reveal delay-1">
                                    <h3>Trust-Based Advisory</h3>
                                    <p>Your interests come first. Every recommendation is driven by your goals, not commissions.</p>
                                    <Link to="/people" className="about-explore">EXPLORE <ArrowRight size={14} /></Link>
                                </div>
                                <div className="about-card scroll-reveal delay-2">
                                    <h3>Evidence-Based</h3>
                                    <p>Strategies built on data, research, and decades of market observation to guide growth.</p>
                                    <Link to="/people" className="about-explore">EXPLORE <ArrowRight size={14} /></Link>
                                </div>
                                <div className="about-card scroll-reveal delay-3">
                                    <h3>Behaviour-Focused</h3>
                                    <p>90% of performance comes from investor behaviour. We coach discipline and patience for long-term compounding.</p>
                                    <Link to="/people" className="about-explore">EXPLORE <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUSTED BY */}
            <section className="trusted-by">
                <div className="section-inner text-center">
                    <p className="trusted-title">TRUSTED BY THE WORLD'S MOST INFLUENTIAL COMP TEAMS</p>
                    <div className="trusted-logos">
                        <div className="t-logo">
                            <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.5px' }}>NVIDIA</span>
                        </div>
                        <div className="t-logo">
                            <span style={{ fontWeight: 700, fontStyle: 'italic', fontSize: '1.4rem' }}>Micron</span>
                        </div>
                        <div className="t-logo" style={{ borderBottom: '1px dashed #000', paddingBottom: '2px', lineHeight: 1 }}>
                            <span style={{ fontWeight: 400, fontSize: '1.3rem' }}>moderna</span>
                        </div>
                        <div className="t-logo" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#000' }}></div>
                            <span style={{ fontWeight: 600, fontSize: '1.4rem' }}>Biogen</span>
                        </div>
                        <div className="t-logo">
                            <span style={{ fontWeight: 700, fontSize: '1.4rem' }}>okta</span>
                        </div>
                        <div className="t-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
                            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>ThermoFisher</span>
                            <span style={{ fontWeight: 500, fontSize: '0.65rem', letterSpacing: '2px' }}>S C I E N T I F I C</span>
                        </div>
                        <div className="t-logo">
                            <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-1px' }}>DOORDASH</span>
                        </div>
                        <div className="t-logo">
                            <span style={{ fontWeight: 500, fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
                                T<span style={{ fontSize: '1rem', verticalAlign: 'middle', margin: '0 2px' }}>&bull;&bull;</span>Mobile
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="services">
                <div className="section-inner">
                    <div className="section-head" style={{ textAlign: 'left', marginBottom: '60px' }}>
                        <h2 className="about-title title-dark animate-line" style={{ color: 'var(--c-dark)' }}><span>What <span className="highlight">We Do</span></span></h2>
                        <p className="section-sub">Comprehensive solutions for every stage of your wealth journey &mdash; structured, transparent, and truly personalised.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-flip-wrapper">
                            <div className="service-card">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3 className="service-title">Investment Solutions</h3>
                                <p className="service-desc">Access and manage Mutual Funds, Portfolio Management Services (PMS), and Alternative Investment Funds (AIFs), matched precisely to your risk profile.</p>
                                <Link to="/contact" className="service-link">Learn More &rarr;</Link>
                            </div>
                        </div>
                        <div className="service-flip-wrapper">
                            <div className="service-card">
                                <div className="service-icon"><Target size={32} /></div>
                                <h3 className="service-title">Goal-Based Planning</h3>
                                <p className="service-desc">Plan for every milestone including child's education, dream home financing, and secure retirement structuring, aligned to specific timelines.</p>
                                <Link to="/contact" className="service-link">Learn More &rarr;</Link>
                            </div>
                        </div>
                        <div className="service-flip-wrapper">
                            <div className="service-card">
                                <div className="service-icon"><Scale size={32} /></div>
                                <h3 className="service-title">Specialised Services</h3>
                                <p className="service-desc">Comprehensive tax planning, estate structuring solutions, and professional will drafting, handled by qualified experts.</p>
                                <Link to="/contact" className="service-link">Learn More &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDIA'S WEALTH BENTO SECTION */}
            <section className="bento-section">
                <div className="section-inner" style={{ maxWidth: '1400px', padding: '0 40px' }}>
                    <div className="literacy-bento">
                        {/* 1. Top Left - Title Block (Span 2) */}
                        <div className="bento-title-block scroll-reveal">
                            <h2 className="bento-title about-title title-dark animate-line" style={{ marginBottom: '24px' }}><span>India's <span className="highlight">wealth</span> is trapped in the wrong places.</span></h2>
                            <p className="bento-sub">Most Indian households are unknowingly losing purchasing power to inflation every year. Staying on the sidelines is the real risk.</p>
                            <Link to="/contact" className="bento-btn">GET STARTED &rarr;</Link>
                        </div>

                        {/* 2. Top Mid - Stat 1 (Span 1) */}
                        <div className="bento-card scroll-reveal delay-1">
                            <h3 className="bento-stat-num">85%</h3>
                            <img className="bento-stat-img" src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=400" alt="Finance Vault" loading="lazy" />
                            <p className="bento-stat-desc">of Indian household investments sit in fixed deposits &mdash; safe on paper, but silently eroding real wealth.</p>
                        </div>

                        {/* 3. Top Right - Stat 2 (Span 1) */}
                        <div className="bento-card scroll-reveal delay-2">
                            <h3 className="bento-stat-num">72%</h3>
                            <img className="bento-stat-img" src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400" alt="Low Yield Assets" loading="lazy" />
                            <p className="bento-stat-desc">of household wealth is in low-yielding assets that barely beat inflation, leaving families financially exposed.</p>
                        </div>

                        {/* 4. Bottom Left - Large Image (Span 3) */}
                        <div className="bento-card bento-image-large scroll-reveal delay-1">
                            <div className="bento-image-overlay"></div>
                            <div className="bento-image-content">
                                <Link to="/people" className="bento-hover-btn">OUR PEOPLE &rarr;</Link>
                            </div>
                        </div>

                        {/* 5. Bottom Right - Stat 3 (Span 1) */}
                        <div className="bento-card scroll-reveal delay-3">
                            <h3 className="bento-stat-num">&lt;5%</h3>
                            <img className="bento-stat-img" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400" alt="Capital Markets" loading="lazy" />
                            <p className="bento-stat-desc">allocated to capital markets &mdash; the one asset class with genuine long-term wealth creation potential.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Handshake, BarChart2, Brain, Leaf, Shield, MessageCircle } from 'lucide-react';
import udayaImg from '../assets/udaya_babai.png';
import './People.css';

export default function People() {
    useEffect(() => {
        const handleScroll = () => {
            const wrappers = document.querySelectorAll('.profile-photo-wrapper');
            const windowHeight = window.innerHeight;

            wrappers.forEach(wrapper => {
                const rect = wrapper.getBoundingClientRect();

                // Start growing when the wrapper enters the bottom of the screen
                // Maximize when it is well within view
                let progress = (windowHeight - rect.top) / (windowHeight * 0.8);
                progress = Math.max(0, Math.min(1, progress));

                // Map progress (0 to 1) to height (0% to 120%)
                const strip = wrapper.querySelector('.violet-strip');
                if (strip) {
                    strip.style.height = `${progress * 120}%`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main>
            {/* PAGE HEADER */}
            <div className="page-header custom-people-header">
                <div className="page-header-inner align-left">
                    <h1>Meet Our <span className="accent">Experts</span></h1>
                    <p>Decades of capital markets experience, channelled into a behaviour-first, long-term advisory practice.</p>
                </div>
            </div>

            {/* PROFILES */}
            <section className="profiles-section">
                <div className="section-inner">

                    {/* Udaya Ganti */}
                    <div className="profile-card custom-udaya-card">
                        <div className="profile-left custom-udaya-left">
                            <div className="profile-photo-wrapper">
                                <div className="violet-strip"></div>
                                <img src={udayaImg} alt="Udaya Ganti" className="profile-photo" />
                            </div>
                            <div className="profile-name">Udaya Ganti</div>
                            <div className="profile-role">Founder</div>
                            <div className="profile-company">XFOLIOO Investor Services</div>
                        </div>
                        <div className="profile-right custom-udaya-right">
                            <p className="profile-bio-text"><strong>Udaya</strong> has nearly 20 years of experience in Capital Markets. In his previous stint with Bandhan AMC (Erstwhile IDFC AMC) as Sr. Vice-president, he met more than 1000 Registered Advisors, Bankers &amp; MFDs, Financial Planners, Family offices, Corporate investors and UHNI investors. Interactions with these partners has helped him enormously to change his thinking and also helped many partners and investors with solutions.</p>
                            <p className="profile-quote">&ldquo;Udaya assists clients in achieving their financial goals by offering personalized product services tailored to their individual needs, more importantly by guiding investors to approach investments with right behaviour.&rdquo;</p>
                            <p className="profile-bio-note">Done many workshops for Investors, Mutual Fund Distributors, Pvt-Wealth RMs, and also on various topics like Equity, Debt and Behavioral Finance Etc.</p>
                            <p className="profile-bio-note">Udaya is a voracious reader and strongly believes that 90% of investment performance comes from investor behaviour and less than 10% from product selection.</p>
                        </div>
                    </div>

                    {/* Shahul Hameed */}
                    <div className="profile-card custom-udaya-card custom-shahul-card">
                        <div className="profile-left custom-udaya-left custom-shahul-image-col">
                            <div className="profile-photo-wrapper">
                                <div className="violet-strip"></div>
                                {/* Using Udaya's picture temporarily as requested */}
                                <img src={udayaImg} alt="Shahul Hameed" className="profile-photo" />
                            </div>
                            <div className="profile-name">Shahul Hameed</div>
                            <div className="profile-role">Co-Founder</div>
                            <div className="profile-company">XFOLIOO Investor Services</div>
                        </div>
                        <div className="profile-right custom-udaya-right custom-shahul-text-col">
                            <p className="profile-bio-text"><strong>Shahul</strong> brings 17+ years of capital markets experience, working closely with Relationship Managers, MFDs, and Wealth Managers across the financial advisory ecosystem.</p>
                            <p className="profile-quote">&ldquo;Financial clarity is not a luxury. Every individual deserves to understand where their money is going and why &mdash; and we are here to guide that journey.&rdquo;</p>
                            <p className="profile-bio-note">Shahul brings a rare combination of technical depth and creative delivery to financial education. His innovative approach to explaining complex financial concepts in simple, relatable terms makes him a trusted advisor and sought-after workshop facilitator.</p>
                            <p className="profile-bio-note">Known for behaviour-focused guidance, unique workshop delivery, and simplifying complex market concepts for every kind of investor.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* VALUES */}
            <div className="values-section">
                <div className="values-inner">
                    <span className="section-tag">Our Values</span>
                    <h2 className="section-title">What Drives Every Decision We Make</h2>
                    <p className="section-sub">The principles that guide every client relationship and investment recommendation.</p>
                    <div className="values-chips">
                        <div className="value-chip"><Handshake size={16} /> Client-First Approach</div>
                        <div className="value-chip"><BarChart2 size={16} /> Evidence-Based Decisions</div>
                        <div className="value-chip"><Brain size={16} /> Behaviour-Focused Advisory</div>
                        <div className="value-chip"><Leaf size={16} /> Long-Term Thinking</div>
                        <div className="value-chip"><Shield size={16} /> Regulatory Compliance</div>
                        <div className="value-chip"><MessageCircle size={16} /> Transparent Communication</div>
                    </div>
                </div>
                {/* Horizontal partitioning line */}
                <div className="values-divider"></div>
            </div>
        </main>
    );
}

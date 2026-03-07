import { Link } from 'react-router-dom';
import {
    Presentation, Landmark, AlertTriangle, BookOpen, Activity,
    Clock, Users, Settings2, MessageCircle,
    Shield, TrendingUp, PiggyBank, BarChart2, Home, Phone,
    ChevronRight, ArrowRight
} from 'lucide-react';
import './Workshops.css';

export default function Workshops() {
    return (
        <main>
            {/* PAGE HEADER */}
            <div className="page-header custom-people-header">
                <div className="page-header-inner align-left">
                    <h1>"An Investment in Knowledge Pays the <span className="accent">Best Interest.</span>"</h1>
                    <p>Our workshops are crafted to demystify investing and empower individuals to take confident, informed financial decisions.</p>
                </div>
            </div>

            {/* PROBLEM */}
            <section className="problem-section">
                <div className="section-inner">
                    <div className="section-head">
                        <span className="section-tag">Why This Matters</span>
                        <h2 className="section-title">India is a Nation of Savers, Not Investors</h2>
                        <p className="section-sub">The financial knowledge gap is costing Indian families their long-term wealth. Here is the challenge we address.</p>
                    </div>
                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="prob-icon"><Landmark size={22} /></div>
                            <div className="prob-text">
                                <h4>High Allocation to Low-Yield Assets</h4>
                                <p>Most Indian households keep savings in fixed deposits — safe on the surface, but quietly eroding real wealth to inflation over time.</p>
                            </div>
                        </div>
                        <div className="problem-card">
                            <div className="prob-icon"><AlertTriangle size={22} /></div>
                            <div className="prob-text">
                                <h4>Misconceptions About ULIPs &amp; Insurance</h4>
                                <p>Many investors confuse insurance with investment products, resulting in portfolios that serve neither protection nor wealth creation.</p>
                            </div>
                        </div>
                        <div className="problem-card">
                            <div className="prob-icon"><BookOpen size={22} /></div>
                            <div className="prob-text">
                                <h4>Low Financial Literacy Nationwide</h4>
                                <p>Awareness of tools like SIP, STP, SWP, and asset allocation remains low. Our workshops change this — one conversation at a time.</p>
                            </div>
                        </div>
                        <div className="problem-card">
                            <div className="prob-icon"><Activity size={22} /></div>
                            <div className="prob-text">
                                <h4>Fear and Inertia Around Capital Markets</h4>
                                <p>Market volatility creates irrational fear. We address the behavioural side of investing, not just the technical mechanics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMAT */}
            <section className="format-section">
                <div className="section-inner">
                    <div className="section-head">
                        <span className="section-tag">Workshop Format</span>
                        <h2 className="section-title">Designed for Real People, Not Just Professionals</h2>
                        <p className="section-sub">Every session is practical, jargon-free, and directly applicable to participants' financial lives.</p>
                    </div>
                    <div className="format-grid">
                        <div className="format-item">
                            <div className="format-icon"><Clock size={24} /></div>
                            <h4>Duration</h4>
                            <p>1.5 to 3 hours per session, adaptable to the audience and objective.</p>
                        </div>
                        <div className="format-item">
                            <div className="format-icon"><Users size={24} /></div>
                            <h4>Group Size</h4>
                            <p>Small, focused groups of 15–30 participants for quality interaction.</p>
                        </div>
                        <div className="format-item">
                            <div className="format-icon"><Settings2 size={24} /></div>
                            <h4>Customisable</h4>
                            <p>Modules tailored to the specific needs of your organisation or group.</p>
                        </div>
                        <div className="format-item">
                            <div className="format-icon"><MessageCircle size={24} /></div>
                            <h4>Jargon-Free</h4>
                            <p>Complex concepts explained in simple, everyday language everyone can follow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODULES */}
            <section className="modules-section">
                <div className="section-inner">
                    <div className="section-head">
                        <span className="section-tag">Workshop Modules</span>
                        <h2 className="section-title">Topics We Cover</h2>
                        <p className="section-sub">Each module is standalone or can be combined into a comprehensive financial literacy programme.</p>
                    </div>
                    <div className="modules-grid">
                        <div className="module-card">
                            <div className="module-icon"><Shield size={24} /></div>
                            <h3>Insurance Planning</h3>
                            <ul>
                                <li><ChevronRight size={15} /> Term vs. endowment — what you actually need</li>
                                <li><ChevronRight size={15} /> Why ULIPs are not wealth-creation tools</li>
                                <li><ChevronRight size={15} /> How to calculate the right coverage</li>
                                <li><ChevronRight size={15} /> Health insurance basics and gaps</li>
                            </ul>
                        </div>
                        <div className="module-card">
                            <div className="module-icon"><TrendingUp size={24} /></div>
                            <h3>Mutual Fund Fundamentals</h3>
                            <ul>
                                <li><ChevronRight size={15} /> SIP, STP, SWP explained simply</li>
                                <li><ChevronRight size={15} /> Equity vs. debt fund allocation</li>
                                <li><ChevronRight size={15} /> The power of compounding over time</li>
                                <li><ChevronRight size={15} /> How to read a fund factsheet</li>
                            </ul>
                        </div>
                        <div className="module-card">
                            <div className="module-icon"><PiggyBank size={24} /></div>
                            <h3>Retirement Planning</h3>
                            <ul>
                                <li><ChevronRight size={15} /> Why starting early matters most</li>
                                <li><ChevronRight size={15} /> NPS, PPF, EPF — pros and cons</li>
                                <li><ChevronRight size={15} /> Estimating your retirement corpus</li>
                                <li><ChevronRight size={15} /> Common retirement planning mistakes</li>
                            </ul>
                        </div>
                        <div className="module-card">
                            <div className="module-icon"><BarChart2 size={24} /></div>
                            <h3>Behavioural Finance</h3>
                            <ul>
                                <li><ChevronRight size={15} /> Why investors panic-sell at market lows</li>
                                <li><ChevronRight size={15} /> Cognitive biases that destroy wealth</li>
                                <li><ChevronRight size={15} /> The discipline advantage in investing</li>
                                <li><ChevronRight size={15} /> Developing a long-term investment mindset</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-inner">
                    <h2>Ready to Organise a Workshop?</h2>
                    <p>Whether for your organisation, team, or community, we'll design a session that makes a real difference.</p>
                    <div className="cta-btns">
                        <Link to="/contact" className="btn-white"><Phone size={18} /> Contact Us to Book</Link>
                        <Link to="/people" className="btn-outline-w"><ArrowRight size={18} /> Meet Our Facilitators</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

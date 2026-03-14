import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Clock, Phone, Send, Lock, X } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start the line animation slightly before it reaches the middle of the screen
            const triggerPoint = windowHeight * 0.6;

            let progress = (triggerPoint - rect.top) / rect.height;
            progress = Math.max(0, Math.min(1, progress));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Track interaction states
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isActive = isHovered || isFocused;

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        alert('Message sent successfully! We will get back to you shortly.');
        setForm({ name: '', email: '', message: '' });
        setIsFocused(false);
    };

    return (
        <main className="modern-contact-page">
            <div className="modern-container">
                <div className="modern-layout">
                    {/* LEFT SIDE: TIMELINE INFO CARDS */}
                    <div className="c-timeline-column" ref={timelineRef}>
                        <div className="c-timeline-line-base"></div>
                        <div
                            className="c-timeline-line-active"
                            style={{ height: `calc(${scrollProgress} * (100% - 40px))` }}
                        ></div>
                        <div className="c-timeline-item">
                            <div className="c-timeline-icon" style={{ borderColor: scrollProgress > 0.05 ? 'var(--mc-primary)' : 'transparent', color: scrollProgress > 0.05 ? 'var(--mc-primary)' : '#9ca3af', transition: 'all 0.3s' }}><MapPin size={20} /></div>
                            <div className="c-info-card">
                                <h3>Office Address</h3>
                                <p>Wework Prestige Atlanta<br />No 10/12, 80 Feet Main Road<br />1A Block, Koramangala<br />Bangalore, KA – 560034</p>
                            </div>
                        </div>

                        <div className="c-timeline-item">
                            <div className="c-timeline-icon" style={{ borderColor: scrollProgress > 0.35 ? 'var(--mc-primary)' : 'transparent', color: scrollProgress > 0.35 ? 'var(--mc-primary)' : '#9ca3af', transition: 'all 0.3s' }}><Clock size={20} /></div>
                            <div className="c-info-card">
                                <h3>Office Hours</h3>
                                <div className="c-hours-row">
                                    <span>Mon – Fri</span>
                                    <span>10:00 – 17:30</span>
                                </div>
                                <div className="c-hours-row">
                                    <span>Sat – Sun</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="c-timeline-item">
                            <div className="c-timeline-icon" style={{ borderColor: scrollProgress > 0.65 ? 'var(--mc-primary)' : 'transparent', color: scrollProgress > 0.65 ? 'var(--mc-primary)' : '#9ca3af', transition: 'all 0.3s' }}><Phone size={20} /></div>
                            <div className="c-info-card">
                                <h3>Phone Support</h3>
                                <a href="tel:+919618521123">+91 96185 21123</a>
                                <a href="tel:+919611688851">+91 96116 88851</a>
                            </div>
                        </div>

                        <div className="c-timeline-item">
                            <div className="c-timeline-icon" style={{ borderColor: scrollProgress > 0.95 ? 'var(--mc-primary)' : 'transparent', color: scrollProgress > 0.95 ? 'var(--mc-primary)' : '#9ca3af', transition: 'all 0.3s' }}><Mail size={20} /></div>
                            <div className="c-info-card">
                                <h3>Email Direct</h3>
                                <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a>
                                <a href="mailto:shahul@xfolioo.com">shahul@xfolioo.com</a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: INTERACTIVE FORM */}
                    <div className="modern-form-column">
                        <div className="c-form-card">
                            <div className="c-form-content">
                                <h2>Send a Message</h2>
                                <p className="c-form-subtitle">Fill in your details and we'll respond fast.</p>

                                <form onSubmit={handleSubmit} className="c-form">
                                    <div className="c-input-group">
                                        <input type="text" id="name" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="c-input-group">
                                        <input type="email" id="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
                                    </div>
                                    <div className="c-input-group">
                                        <textarea id="message" name="message" placeholder="Your Message" required value={form.message} onChange={handleChange}></textarea>
                                    </div>

                                    <button type="submit" className="c-submit-btn">
                                        <Send size={18} /> Send Message
                                    </button>

                                    <div className="c-form-footer">
                                        <Lock size={14} /> <span>Secure and confidential.</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

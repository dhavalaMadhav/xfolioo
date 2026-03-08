import { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, Lock, X } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

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

            {/* HERO SECTION WITH WIDE BACKGROUND */}
            <section className="contact-hero">
                <div className="modern-container">
                    <header className="modern-header">
                        <div className="header-badge"><Mail size={16} /> Let's Connect</div>
                        <h1>Get in Touch</h1>
                        <p>Whether you have a financial question, want to organise a workshop, or simply want to talk — we're here.</p>
                    </header>
                </div>
            </section>

            <div className="modern-container">

                <div className={`modern-layout ${isActive ? 'layout-active' : ''}`}>

                    {/* LEFT SIDE: INFO CARDS */}
                    <div className="modern-info-column">

                        <div className="m-info-card">
                            <div className="m-icon-box"><MapPin size={22} /></div>
                            <div className="m-card-content">
                                <h3>Office Address</h3>
                                <p>Wework Prestige Atlanta<br />No 10/12, 80 Feet Main Rd<br />Koramangala, Bangalore 560034</p>
                            </div>
                        </div>

                        <div className="m-info-card">
                            <div className="m-icon-box"><Clock size={22} /></div>
                            <div className="m-card-content">
                                <h3>Office Hours</h3>
                                <div className="m-hours-row">
                                    <span>Mon – Fri</span>
                                    <span>10:00 – 17:30</span>
                                </div>
                                <div className="m-hours-row m-closed">
                                    <span>Sat – Sun</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="m-info-card">
                            <div className="m-icon-box"><Phone size={22} /></div>
                            <div className="m-card-content">
                                <h3>Phone Support</h3>
                                <a href="tel:+919618521123">+91 96185 21123</a>
                                <a href="tel:+919611688851">+91 96116 88851</a>
                            </div>
                        </div>

                        <div className="m-info-card">
                            <div className="m-icon-box"><Mail size={22} /></div>
                            <div className="m-card-content">
                                <h3>Email Direct</h3>
                                <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a>
                                <a href="mailto:shahul@xfolioo.com">shahul@xfolioo.com</a>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE: INTERACTIVE FORM */}
                    <div
                        className="modern-form-column"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                setIsFocused(false);
                            }
                        }}
                    >

                        <div className="m-form-card">
                            <div className="m-form-content">
                                <h2>Send a Message</h2>
                                <p className="m-form-subtitle">Fill in your details and we'll respond fast.</p>

                                <form onSubmit={handleSubmit} className="m-form">
                                    <div className="m-input-group">
                                        <input type="text" id="name" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="m-input-group">
                                        <input type="email" id="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
                                    </div>

                                    <div className="m-input-group">
                                        <textarea id="message" name="message" placeholder="Your Message" required value={form.message} onChange={handleChange}></textarea>
                                    </div>

                                    <button type="submit" className="m-submit-btn">
                                        <Send size={18} /> Send Message
                                    </button>

                                    <div className="m-form-footer">
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

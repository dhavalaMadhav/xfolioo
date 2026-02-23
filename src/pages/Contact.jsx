import { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, Lock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        alert('Thank you! We will get back to you within one business day.');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <main>
            {/* PAGE HEADER */}
            <div className="page-header">
                <div className="page-header-inner" style={{ maxWidth: '560px' }}>
                    <div className="page-badge"><Mail size={14} /> Get In Touch</div>
                    <h1>Contact Us</h1>
                    <p>Whether you have a financial question, want to organise a workshop, or simply want to talk — we're here.</p>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="contact-section">
                <div className="contact-grid">

                    {/* INFO STACK */}
                    <div className="info-stack">
                        <div className="info-card">
                            <div className="info-card-header">
                                <div className="info-card-icon"><MapPin size={20} /></div>
                                <div className="info-card-title">Our Office</div>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Registered Address</span>
                                <span className="info-value">Wework Prestige Atlanta<br />No 10/12, 80 Feet Main Road<br />1A Block, Koramangala<br />Bangalore, KA – 560034</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-card-header">
                                <div className="info-card-icon"><Clock size={20} /></div>
                                <div className="info-card-title">Office Hours</div>
                            </div>
                            <div className="hours-grid">
                                <div className="hours-item">
                                    <div className="hours-day">Mon – Fri</div>
                                    <div className="hours-time">10:00 – 17:30</div>
                                </div>
                                <div className="hours-item">
                                    <div className="hours-day">Sat – Sun</div>
                                    <div className="hours-time">Closed</div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-card-header">
                                <div className="info-card-icon"><Phone size={20} /></div>
                                <div className="info-card-title">Reach Us Directly</div>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Phone</span>
                                <span className="info-value">
                                    <a href="tel:+919618521123">+91 96185 21123</a>
                                    <a href="tel:+919611688851">+91 96116 88851</a>
                                </span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Email</span>
                                <span className="info-value">
                                    <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a>
                                    <a href="mailto:shahul@xfolioo.com">shahul@xfolioo.com</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="form-card">
                        <h2>Send Us a Message</h2>
                        <p className="form-sub">Fill in the form and we'll respond within one business day.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row-2">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your full name" required value={form.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">I'm Interested In</label>
                                <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                                    <option value="">Select a topic…</option>
                                    <option>Mutual Fund Advisory</option>
                                    <option>Goal-Based Planning</option>
                                    <option>Organise a Workshop</option>
                                    <option>Schedule an Expert Call</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" placeholder="Tell us about your financial goals or query…" value={form.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="submit-btn"><Send size={18} /> Send Message</button>
                            <p className="form-note"><Lock size={14} /> Your information is confidential and secure.</p>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}

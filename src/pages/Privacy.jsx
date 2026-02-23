import { FileText, Landmark, ShieldCheck, ChevronRight, Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';
import './Privacy.css';

export default function Privacy() {
    return (
        <main>
            {/* PAGE HEADER */}
            <div className="page-header">
                <div className="page-header-inner">
                    <div className="page-badge"><FileText size={14} /> Legal &amp; Compliance</div>
                    <h1>Privacy &amp; Disclosure</h1>
                    <p>Regulatory disclosures, data privacy policy, and investor information as required by AMFI guidelines.</p>
                    <p className="priv-updated">Last updated: February 2025</p>
                </div>
            </div>

            {/* CONTENT */}
            <section className="privacy-section">
                <div className="privacy-inner">

                    {/* ENTITY BOX */}
                    <div className="entity-box">
                        <div className="entity-icon"><Landmark size={24} /></div>
                        <div>
                            <h3>Registered Entity</h3>
                            <p>Mutual Fund distribution services are offered through <strong>XFOLIOO INVESTOR SERVICES LLP</strong>, a licensed Mutual Fund Distributor registered with the Association of Mutual Funds in India (AMFI).</p>
                            <div className="arn-tag"><ShieldCheck size={13} /> AMFI Registration No: ARN – 312814</div>
                        </div>
                    </div>

                    {/* POLICY BLOCKS */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">1</div>
                            <h2>Mutual Fund Disclosure</h2>
                        </div>
                        <div className="policy-card">
                            <ul>
                                <li><ChevronRight size={18} /> Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.</li>
                                <li><ChevronRight size={18} /> Past performance of a mutual fund scheme is not indicative of the future performance of the same or any other scheme.</li>
                                <li><ChevronRight size={18} /> The NAV of units issued under the scheme can go up or down depending on market conditions.</li>
                                <li><ChevronRight size={18} /> XFOLIOO INVESTOR SERVICES LLP is a registered Mutual Fund Distributor regulated under AMFI guidelines.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">2</div>
                            <h2>Website Disclaimer</h2>
                        </div>
                        <div className="policy-card">
                            <p>This website is for informational and educational purposes only. The content does not constitute:</p>
                            <ul>
                                <li><ChevronRight size={18} /> An offer to buy or sell any securities or financial instruments.</li>
                                <li><ChevronRight size={18} /> A solicitation of any investment advisory service.</li>
                                <li><ChevronRight size={18} /> A recommendation to purchase or sell any specific investment product.</li>
                                <li><ChevronRight size={18} /> Legal, tax, or accounting advice of any kind.</li>
                            </ul>
                            <p style={{ marginTop: '16px' }}>All information is believed to be accurate at time of publication but is subject to change. Investors are advised to consult qualified financial, legal, and tax professionals before making any investment decisions.</p>
                        </div>
                        <div className="warning-card">
                            <AlertTriangle size={20} />
                            <p><strong>Important:</strong> Investment in securities market are subject to market risks. Read all related documents carefully before investing. Registration granted by AMFI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</p>
                        </div>
                    </div>

                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">3</div>
                            <h2>Data Privacy</h2>
                        </div>
                        <div className="policy-card">
                            <p>We are committed to protecting the privacy of all individuals who interact with our website and services.</p>
                            <ul>
                                <li><ChevronRight size={18} /> Personal data submitted via contact forms is used solely to respond to your enquiry.</li>
                                <li><ChevronRight size={18} /> We do not sell, trade, or transfer your personal information to third parties without explicit consent.</li>
                                <li><ChevronRight size={18} /> We do not use cookies for tracking or advertising purposes.</li>
                                <li><ChevronRight size={18} /> Data is stored securely, accessible only to authorised personnel.</li>
                                <li><ChevronRight size={18} /> You may request deletion of your data at any time by emailing <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a>.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">4</div>
                            <h2>Regulatory Information</h2>
                        </div>
                        <div className="policy-card">
                            <ul>
                                <li><ChevronRight size={18} /> XFOLIOO INVESTOR SERVICES LLP operates under AMFI guidelines as a registered Mutual Fund Distributor (ARN 312814).</li>
                                <li><ChevronRight size={18} /> Investors with complaints should first approach XFOLIOO INVESTOR SERVICES LLP for resolution.</li>
                                <li><ChevronRight size={18} /> Unresolved complaints may be escalated to the respective AMC or AMFI.</li>
                                <li><ChevronRight size={18} /> The SEBI SCORES platform (scores.gov.in) is available for investors to lodge complaints.</li>
                                <li><ChevronRight size={18} /> All transactions are processed through AMFI-approved platforms and registered RTAs.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">5</div>
                            <h2>Questions or Concerns</h2>
                        </div>
                        <div className="policy-card">
                            <p>For any questions related to this disclosure, privacy practices, or regulatory matters:</p>
                            <ul>
                                <li><Mail size={18} /> <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a></li>
                                <li><Phone size={18} /> <a href="tel:+919618521123">+91 96185 21123</a></li>
                                <li><MapPin size={18} /> Wework Prestige Atlanta, No 10/12, 80 Feet Main Road, 1A Block, Koramangala, Bangalore – 560034</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

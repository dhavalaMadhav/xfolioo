import { FileText, Landmark, ShieldCheck, ChevronRight, Mail, Phone, MapPin, AlertTriangle, Cookie, Users, RefreshCw, Globe, Lock, HelpCircle } from 'lucide-react';
import './Privacy.css';

export default function Privacy() {
    return (
        <main>
            {/* PAGE HEADER */}
            <div className="page-header custom-people-header">
                <div className="page-header-inner align-left">
                    <h1>Privacy <span className="accent" style={{ textDecoration: 'underline' }}><span className="roll-text" data-text="Policy"><span>Policy</span></span></span></h1>
                    <p>Effective from 1st Jan 2025. This Statement explains our policies and practices regarding the collection and use of your information on the XFOLIOO platform.</p>
                    <p className="priv-updated">Effective Date: 1st January 2025</p>
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
                            <p>We at <strong>Xfolioo Investor Services LLP</strong> ("we", or "us") know you care about how your personal information is used and shared, and we take your privacy seriously. By using or accessing the Services on the Platform in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways.</p>
                            <div className="arn-tag"><ShieldCheck size={13} /> AMFI Registration No: ARN – 312814</div>
                        </div>
                    </div>

                    {/* 1. What does this cover */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">1</div>
                            <h2>What does this Privacy Policy cover?</h2>
                        </div>
                        <div className="policy-card">
                            <p>This Privacy Policy covers our treatment of personally identifiable information ("Personal Information") that we gather when you are accessing or using our Services, but not to the practices of companies we don't own or control, or people that we don't manage.</p>
                            <p>Remember that your use of the Platform is at all times subject to the Terms of Use, which incorporates this Privacy Policy. Any terms we use in this Privacy Policy without defining them have the definitions given to them in the Terms of Use.</p>
                        </div>
                    </div>

                    {/* 2. What information do we collect */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">2</div>
                            <h2>What information do we collect?</h2>
                        </div>
                        <div className="policy-card">
                            <p>We gather various types of Personal Information from our users, which includes information you provide us and information collected from other parties.</p>
                            <p><strong>Information You Provide to Us:</strong></p>
                            <p>We receive and store any information you knowingly provide to us. For example, through the registration process and/or through your account settings on the Platform, we may collect Personal Information such as:</p>
                            <ul>
                                <li><ChevronRight size={18} /> Full name as its in Aadhar card / PAN card, Mobile Number, Place of birth</li>
                                <li><ChevronRight size={18} /> Aadhar details, PAN details, Bank account details, email address, Phone number</li>
                                <li><ChevronRight size={18} /> Nominee name, DOB, Place of birth and % of benefits for each nominee</li>
                                <li><ChevronRight size={18} /> Occupation details, Source of income, and Cancelled cheque photo</li>
                            </ul>
                            <p style={{ marginTop: '16px' }}>We may communicate with you on the email provided during creating the account on the Platform. Promotional and other emails are also sent to your email id. If you do not want to receive these specific communications from us, you have the opportunity to unsubscribing from the same on the Platform itself.</p>
                        </div>
                    </div>

                    {/* 3. Cookies */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">3</div>
                            <h2>Information collected through Cookies</h2>
                        </div>
                        <div className="policy-card">
                            <p>"Cookies" are identifiers we transfer to your browser or device that allow us to recognize your device and tell us how and when the Platform and its Services are visited and by how many people. You may be able to change the preferences on your browser or device to prevent or limit your device's acceptance of cookies, but this may prevent you from taking advantage of some of our features.</p>
                            <p>If you click on a link to a third-party website or service, such third party may also transmit cookies to you. This Privacy Policy does not cover the use of cookies by any third parties, and we aren't responsible for their privacy policies and practices. Please be aware that cookies placed by third parties may continue to track your activities online even after you have left our Services.</p>
                        </div>
                    </div>

                    {/* 4. How we use information */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">4</div>
                            <h2>How We Use Your Information</h2>
                        </div>
                        <div className="policy-card">
                            <p>We use this Personal Information internally in connection with our Services, including:</p>
                            <ul>
                                <li><ChevronRight size={18} /> Customers profile data will be used to personalize the offerings and personalize the message in the app.</li>
                                <li><ChevronRight size={18} /> We use customer profile data for our internal analysis purposes only to understand the investment pattern behaviour like money invested by age group, etc so that we can improve our services further using these insights.</li>
                                <li><ChevronRight size={18} /> No data is shared or sold with any vendor or partner outside of Xfolioo Investor Services for commercial purposes.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Will we share */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">5</div>
                            <h2>Will We Share Your Information?</h2>
                        </div>
                        <div className="policy-card">
                            <p>We may share your Personal Information with the following for smooth delivery of our product:</p>
                            <ul>
                                <li><ChevronRight size={18} /> <strong>CAMS</strong> (Computer Age Management Systems) — We share customers profile data with CAMS in order to provide investment related views to our customers. CAMS is a SEBI-registered RTA (Registrar &amp; Transfer Agents).</li>
                                <li><ChevronRight size={18} /> <strong>KFintech</strong> — We share customer profile data with KFintech in order to provide investment related views to our customers. KFintech is a SEBI-registered RTA (Registrar &amp; Transfer Agents).</li>
                                <li><ChevronRight size={18} /> <strong>Asset Management Company (AMC)</strong> — We share customer profile data with AMCs. AMCs are the mutual fund houses who create and sell investment products like mutual funds, PMS, etc.</li>
                            </ul>
                            <p style={{ marginTop: '16px' }}><strong>Business Transfers:</strong> We may choose to buy or sell assets and may share and/or transfer customer information in connection with the evaluation of and entry into such transactions. Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or go through some other change of control, Personal Information could be one of the assets transferred to or acquired by a third party.</p>
                            <p style={{ marginTop: '16px' }}><strong>Protection of Xfolioo Investor Services LLP and Others:</strong> We reserve the right to access, read, preserve, and disclose any information that we believe is necessary to comply with law or court order; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Xfolioo Investor Services, our employees, our users, or others.</p>
                        </div>
                        <div className="warning-card">
                            <AlertTriangle size={20} />
                            <p><strong>Disclosure for Law Enforcement:</strong> Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
                        </div>
                    </div>

                    {/* 6. Policy changes */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">6</div>
                            <h2>Will we ever change this Privacy Policy?</h2>
                        </div>
                        <div className="policy-card">
                            <p>We're constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing the new Privacy Policy on the Platform. We will let you know via email and/or a prominent notice on the Platform, prior to the change becoming effective and update "effective date" at the top of this Privacy Policy.</p>
                            <p>Please note that if you've opted not to receive legal notice emails from us (or you haven't provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes.</p>
                        </div>
                    </div>

                    {/* 7. Transfer of Data */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">7</div>
                            <h2>Transfer of Data</h2>
                        </div>
                        <div className="policy-card">
                            <p>Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</p>
                            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. We will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                        </div>
                    </div>

                    {/* 8. Security */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">8</div>
                            <h2>Is Personal Information about me secure?</h2>
                        </div>
                        <div className="policy-card">
                            <p>Your account is protected by a password for your privacy and security. You must prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately and limiting access to your computer or device and browser by signing off after you have finished accessing your account.</p>
                            <p>We endeavour to protect the privacy of your account and other Personal Information we hold in our records, but unfortunately, we cannot guarantee complete security. Unauthorized entry or use, failure of the Services, or other factors may compromise the security of user information.</p>
                        </div>
                    </div>

                    {/* 9. Access */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">9</div>
                            <h2>What Personal Information can I access?</h2>
                        </div>
                        <div className="policy-card">
                            <p>Through your account settings, you may access, and, in some cases, edit or delete the following information you've provided to us:</p>
                            <ul>
                                <li><ChevronRight size={18} /> Name and password</li>
                                <li><ChevronRight size={18} /> Email address</li>
                            </ul>
                            <p style={{ marginTop: '16px' }}>The information you can view, update, and delete may change as the Services change. If you have any questions about viewing or updating information we have on file about you, please contact us at <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a> / <a href="mailto:shahul@xfolioo.com">shahul@xfolioo.com</a>.</p>
                        </div>
                    </div>

                    {/* 10. Choices */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">10</div>
                            <h2>What choices do I have?</h2>
                        </div>
                        <div className="policy-card">
                            <p>You can always opt not to disclose information to us, but keep in mind some information may be needed to register on the Platform.</p>
                            <p>You may be able to add or update information as explained above. When you update information, however, we may maintain a copy of the unrevised information in our records. We maintain historical data for auditing purposes. We may use any aggregated data derived from or incorporating your Personal Information after you update or disable, but not in a manner that would identify you personally.</p>
                        </div>
                    </div>

                    {/* 11. Questions */}
                    <div className="policy-block">
                        <div className="block-header">
                            <div className="block-num">11</div>
                            <h2>Questions or Concerns</h2>
                        </div>
                        <div className="policy-card">
                            <p>If you have any questions or concerns regarding our privacy policies, please send us a detailed message and we will try to resolve your concerns.</p>
                            <ul>
                                <li><Mail size={18} /> <a href="mailto:ug@xfolioo.com">ug@xfolioo.com</a></li>
                                <li><Mail size={18} /> <a href="mailto:shahul@xfolioo.com">shahul@xfolioo.com</a></li>
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

import { useState } from 'react';
import { Lock, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import './Login.css';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin() {
        setIsLoading(true);
        // Redirect to the MFU portal
        setTimeout(() => {
            window.open('https://www.mfuonline.com', '_blank');
            setIsLoading(false);
        }, 600);
    }

    return (
        <main className="login-wrapper">
            <div className="login-card">
                <div className="login-icon-wrap">
                    <Lock size={28} />
                </div>
                <h1>Client Login</h1>
                <p className="login-sub">Access your XFOLIOO investment portfolio, transactions, and reports.</p>

                <div className="login-notice">
                    <ShieldCheck size={18} />
                    <div>
                        <strong>Third-Party Authentication</strong>
                        <p>Your account is managed through MFU (MF Utilities India), our secure platform partner. You will be redirected to the official MFU portal to log in.</p>
                    </div>
                </div>

                <button
                    className="login-btn"
                    onClick={handleLogin}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="login-btn-loading">Redirecting…</span>
                    ) : (
                        <><ExternalLink size={18} /> Proceed to Login Portal</>
                    )}
                </button>

                <a href="mailto:ug@xfolioo.com" className="login-help">
                    <HelpCircle size={16} /> Need help accessing your account?
                </a>

                <p className="login-amfi">
                    XFOLIOO Investor Services LLP<br />
                    AMFI Registration No: ARN – 312814
                </p>
            </div>
        </main>
    );
}

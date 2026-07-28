import { useAuthContext } from '../../context/auth-context';
import { useNewsletterContext } from '../../context/newsletter-context';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './profile-context.css';

function ProfileContent() {
    const { user, logout } = useAuthContext();
    const { subscribeNewsletter, loading, success, error } = useNewsletterContext();
    const navigate = useNavigate();

    const [customEmail, setCustomEmail] = useState("");

    const handleSubscribe = () => {
        const email = customEmail || user?.profile?.email;

        if (!email) {
            alert("Email topilmadi ❌");
            return;
        }

        subscribeNewsletter(email);
    };

    return (
        <div className="profile">
            <div className="container">

                <div className="profile-header">
                    <img
                        src={user?.profile?.avatar_url}
                        alt={user?.profile?.full_name}
                    />

                    <div>
                        <div className="profile-name">
                            {user?.profile?.full_name}
                        </div>

                        <div className="profile-email">
                            {user?.profile?.email}
                        </div>
                    </div>
                </div>

                <div className="profile-body">
                    <div className="profile-item">
                        <span>Full Name:</span>
                        <p>{user?.profile?.full_name}</p>
                    </div>

                    <div className="profile-item">
                        <span>Email:</span>
                        <p>{user?.profile?.email || "No email"}</p>
                    </div>

                    <div className="profile-item">
                        <span>Phone:</span>
                        <p>{user?.profile?.phone || "No phone"}</p>
                    </div>

                    <div className="profile-item">
                        <span>Address:</span>
                        <p>{user?.profile?.address || "No address"}</p>
                    </div>
                </div>

                {/* 🔥 NEWSLETTER */}
                <div className="newsletter-box">
                    <h4>Subscribe to Newsletter 📩</h4>

                    <input
                        type="email"
                        placeholder="Email kiriting (ixtiyoriy)"
                        value={customEmail}
                        onChange={(e) => setCustomEmail(e.target.value)}
                    />

                    <button
                        className="btn btn-edit"
                        onClick={handleSubscribe}
                        disabled={loading}
                    >
                        {loading ? "Yuborilmoqda..." : "Subscribe"}
                    </button>

                    {success && <p className="success">Obuna bo‘ldingiz ✅</p>}
                    {error && <p className="error">{error}</p>}
                </div>

                <div className="profile-actions">
                    <button
                        className="btn btn-logout"
                        onClick={() => {
                            logout();
                            navigate("/login");
                        }}
                    >
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProfileContent;
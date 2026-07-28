import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchContext } from "../../context/search-context";
import logo from "../../assets/images/logo.svg";
import { useAuthContext } from "../../context/auth-context";
function HeaderContent() {
    const { user, logout, loading } = useAuthContext();
    const { query, setQuery, results } = useSearchContext();
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (loading) {
        return <div className="header__loading">Loading...</div>;
    }

    return (
        <div className="header__content">
            <div className="container">

                <Link to="/" className="header__content-logo">
                    <img src={logo} alt="logo" />
                </Link>

                <form className="header__content-form" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        className="header__formt-input"
                        placeholder="Search for products..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="header__formt-btn">Search</button>

                    {results?.length > 0 && (
                        <div className="search-dropdown">
                            {results.map((item) => (
                                <Link
                                    to={`/product/${item.id}`}
                                    key={item.id}
                                    className="search-item"
                                >
                                    <p>{item.name}</p>
                                    <span>${item.price}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </form>

                <div className="header__content-button">
                    <button className="header__button-btn">
                        Become Vendor
                    </button>

                    <Link to="/compare" className="header__button-cart">
                        <span>Compare</span>
                    </Link>

                    <Link to="/wishlist" className="header__button-cart">
                        <span>Wishlist</span>
                    </Link>

                    <Link to="/cart" className="header__button-cart">
                        <span>Cart</span>
                    </Link>

                    {user ? (
                        <Link to="/profile" className="header__button-cart">
                            <span>{user?.profile?.full_name || "User"}</span>
                        </Link>
                    ) : (
                        <Link to="/register" className="header__button-cart">
                            <span>Login</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
export default HeaderContent
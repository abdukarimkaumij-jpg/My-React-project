import { Link } from "react-router-dom";
import { useState } from "react"; // ✅ qo‘shildi
import logo from "../../assets/images/logo.svg";
import { useAuthContext } from "../../context/auth-context";
import { useSearchContext } from "../../context/search-context";

function HeaderMabile() {
    const { user, logout, loading } = useAuthContext();
    const { query, setQuery, results } = useSearchContext();

    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="header__mabile container">
            <Link to="/" className="header__content-logo">
                <img src={logo} alt="logo" />
            </Link>
            <div className="header__mabile-body">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="header__mabile-button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={"header__mabile-menu"}>
                    <div className={`header__mabile-menuBody ${isOpen ? "active" : ""}`}>
                        <Link to="/" className="header__content-logo">
                            <img src={logo} alt="logo" />
                        </Link>
                        <ul className="menu__item">
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Hot Deals</Link>
                            </li>
                            <li className="menu__item-list">
                                <Link to="./" className="menu__list-link">Home </Link>
                            </li>
                            <li className="menu__item-list">
                                <Link to="/about" className="menu__list-link">About</Link>
                            </li>
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Shop </Link>
                            </li>
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Mega Menu </Link>
                            </li>
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Vendors </Link>
                            </li>
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Blog </Link>
                            </li>
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Pages </Link>
                            </li>
                            <li className="menu__item-list">
                                <Link className="menu__list-link">Contact</Link>
                            </li>
                        </ul>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMabile;
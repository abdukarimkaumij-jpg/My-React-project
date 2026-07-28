import { Link } from "react-router-dom"

function HeaderTop() {
    return(
        <>
         <div className="header__top">
                    <div className="container">
                        <menu className="header__top-menu">
                            <Link to="/about" className="header__menu-link">About Us</Link>
                            <Link to="/profile" className="header__menu-link">My Account</Link>
                            <Link to="/wishlist" className="header__menu-link">Wishlist</Link>
                            <Link to="/tracking" className="header__menu-link">Order Tracking</Link>
                        </menu>
                        <div className="header__top-info">
                            <p className="header__info-text">100% Secure delivery without contacting the courier</p>
                        </div>
                        <div className="header__top-rieht">
                            <div className="header__rieht-button">
                                <div className="header__button-phone">
                                    <span className="header__phone-name">Need help? Call Us:</span>
                                    <a href="tel:1800900122" className="header__phone-tel">+1800900122</a>
                                </div>
                                <ul className="header__rieht-translate">
                                    <li className="header__translate-list">English<a href="">Русский</a></li>
                                </ul>
                                <ul className="header__rieht-translate">
                                    <li className="header__translate-list">INR<a href="">INR</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default HeaderTop
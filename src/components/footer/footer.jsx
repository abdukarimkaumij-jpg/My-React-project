import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__content">
                    <div className="container">
                        <div className="footer__content-logo">
                            <img src="../src\assets\images\logo.svg" alt="logo" className="footer__logo-img" />
                            <div className="footer__logo-info">
                                <p className="footer__info-text">Awesome grocery store website template</p>
                                <div className="footer__info-contact">
                                    <div className="footer__contact-list">
                                        <a href='#'>Address 5171 W Campbell Ave undefined Kent, Utah 53127 United States</a>
                                    </div>
                                    <div className="footer__contact-list">
                                        <a href='tel:+91540025124553'>Call Us <span>(+91)-540-025-124553</span></a>
                                    </div>
                                    <div className="footer__contact-list">
                                        <a href='#'>Email <span>sale@Nest.com</span></a>
                                    </div>
                                    <div className="footer__contact-list">
                                        <a href='#'>Hours 10:00 - 18:00, Mon - Sat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <menu className="footer__content-menu">
                            <ul className="footer__menu-item">
                                <h5 className="footer__item-name">Company</h5>
                                <li className="footer__item-list">
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                </li>
                            </ul>
                            <ul className="footer__menu-item">
                                <h5 className="footer__item-name">Company</h5>
                                <li className="footer__item-list">
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                </li>
                            </ul>
                            <ul className="footer__menu-item">
                                <h5 className="footer__item-name">Company</h5>
                                <li className="footer__item-list">
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                </li>
                            </ul>
                            <ul className="footer__menu-item">
                                <h5 className="footer__item-name">Company</h5>
                                <li className="footer__item-list">
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                    <Link className="footer__list-link">About Us</Link>
                                </li>
                            </ul>
                        </menu>
                        <div className="footer__content-app">
                            <h5 className="footer__item-name">Install App</h5>
                            <p className="footer__app-text">From App Store or Google Play</p>
                            <div className="footer__app-link">
                                <button className="footer__link-btn">
                                    <img src="../src\assets\images\app-1.svg" alt="app" />
                                </button>
                                <button className="footer__link-btn">
                                    <img src="../src\assets\images\app-1.svg" alt="app" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
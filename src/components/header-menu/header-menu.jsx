import { Link } from "react-router-dom";

function HeaderMenu() {
    return(
        <>
        <div className="header__menu">
            <div className="container">
                <menu className="menu">
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
                            <Link to="./contact" className="menu__list-link">Contact</Link>
                        </li>
                    </ul>
                </menu>
            </div>
        </div>
        </>
    )
}
export default HeaderMenu;
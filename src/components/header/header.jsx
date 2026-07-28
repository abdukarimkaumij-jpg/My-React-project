import HeaderContent from '../header-content/header-content'
import HeaderMenu from '../header-menu/header-menu'
import HeaderMabile from '../header-mobile/header-mabile'
import HeaderTop from '../header-top/header-top'
import './header.css'
function Header() {
    return(
        <>
        <header className="header">
            <HeaderTop/>
            <HeaderContent/>
            <HeaderMenu/>
            <HeaderMabile/>
        </header>
        </>
    )
}
export default Header
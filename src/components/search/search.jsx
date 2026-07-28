import MainForm from '../form/main-form'
import './search.css'
function Search() {
    return (
        <>
        <section className="search">
            <div className="search__content container">
                <div className="search__content-img">
                    <div className="search__content-info">
                        <h2 className="search__info-title title">Stay home & get your daily needs from our shop</h2>
                        <p className="search__info-text text">Start You'r Daily Shopping with Nest Mart</p>
                        <MainForm/>
                    </div>
                    <div className="search__content-bg">
                        <img src="src\assets\images\search-bg.png" alt="search" className="search__bg-img" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Search
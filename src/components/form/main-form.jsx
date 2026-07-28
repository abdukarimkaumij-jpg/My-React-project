import './main-form.css'
function MainForm() {
    return(
        <>
        <form  className="main__info-form">
            <input type="email" className="main__form-input" placeholder="Your email address"/>
            <button className="main__form-button">Subscribe</button>
        </form>
        </>
    )
}
export default MainForm;
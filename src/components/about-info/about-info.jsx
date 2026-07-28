import './about-info.css'
function AboutInfo() {
    return(
        <>
        <section className="about">
            <div className="about__content container">
                <div className="about__content-bg">
                    <img src="./src\assets\images\about-bg.png" alt="" />
                </div>
                <div className="about__content-info">
                    <h1 className="about__info-title title">Welcome to Nest</h1>
                    <p className="about__info-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <p className="about__info-text text">Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <div className="about__info-bg">
                        <img src="./src\assets\images\about-2.jpg" alt="" />
                        <img src="./src\assets\images\about-2.jpg" alt="" />
                        <img src="./src\assets\images\about-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default AboutInfo;
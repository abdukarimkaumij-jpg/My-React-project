import './comtact-content.css';

function ContactContent() {
    return (
        <>
            <section className="map">
                <div className="map__content container">
                    <div className="map__content-info">
                        <div className="map__info-main">
                            <p className="map__main-subtitle">
                                How can help you ?
                            </p>

                            <h1 className="map__main-title title">
                                Let us know how we can help you
                            </h1>

                            <p className="map__main-text text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            <p className="map__main-text text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <div className="map__info-wrap">
                            <div className="map__wrap-flex">
                                <h5 className="map__flex-name">
                                    01. Visit Feedback
                                </h5>

                                <p className="map__flex-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>


                            <div className="map__wrap-flex">
                                <h5 className="map__flex-name">
                                    02. Visit Feedback
                                </h5>

                                <p className="map__flex-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>


                            <div className="map__wrap-flex">
                                <h5 className="map__flex-name">
                                    03. Visit Feedback
                                </h5>

                                <p className="map__flex-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>


                            <div className="map__wrap-flex">
                                <h5 className="map__flex-name">
                                    04. Visit Feedback
                                </h5>

                                <p className="map__flex-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="map__content-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5340.344756403806!2d69.22844491902875!3d41.305228869731444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba82aae4355%3A0x10d769f0b9053f4f!2z0JzQtdC00YDQtdGB0LUg0JDQsdGD0LvQutC-0YHQuNC8!5e0!3m2!1sru!2s!4v1785258253930!5m2!1sru!2s"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        >
                        </iframe>
                    </div>

                </div>
            </section>
            <section className="contact">
                <div className="contact__content container">
                    <div className="contact__content-info">
                         <p className="map__main-subtitle">
                            Contact form
                         </p>

                        <h1 className="map__main-title title">
                            Drop Us a Line
                        </h1>
                    </div>
                    <div className="contact__content-wrap">
                        <form  className="contact__wrap-form">
                            <div className="contact__form-input">
                                <input type="name" placeholder='First Name'/>
                                <input type="email" placeholder='Your Email' />
                            </div>
                            <div className="contact__form-input">
                                <input type="phone" placeholder='Your Phone'/>
                                <input type="subject" placeholder='Subject' />
                            </div>
                            <div className="contact__form-input">
                                <input type="massege"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactContent;
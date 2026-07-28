import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { EffectCreative, Pagination } from 'swiper/modules';

import './main.css';
import MainForm from '../form/main-form';


function Main() {
    return (
        <section className="main">
            <Swiper
                grabCursor={true}
                pagination={{ clickable: true }}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[Pagination, EffectCreative]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <img src='src\assets\images\main-1.png' alt="main-bg" className="main__img" />
                    <div className="main__info">
                        <h1 className="main__info-title">Fresh Vegetables Big discount</h1>
                        <p className="main__info-text">Sign up for the daily newsletter</p>
                        <MainForm/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src='src\assets\images\main-1.png' alt="main-bg" className="main__img" />
                    <div className="main__info">
                        <h1 className="main__info-title">Fresh Vegetables Big discount</h1>
                        <p className="main__info-text">Sign up for the daily newsletter</p>
                        <MainForm/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Main;
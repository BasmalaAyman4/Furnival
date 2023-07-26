import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';
import user from '../../assets/image/about-us/user.webp'
export default function Testimonials() {
    return (
        <>
            <section className={`${styles.Testimonials}`}>
                <Container>
                    <h2 className={`${styles.Testimonials__title}`}>Testimonials</h2>
                    <p className={`${styles.Testimonials__para}`}>what people says?</p>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={`${styles.allSwiper}`}>
                                <div className={`${styles.rate}`}>
                                    <p>"I was impressed by the attention to detail and the exquisite craftsmanship of ithe furniturel purchased from this website. The pieces I received were even more beautiful in person than in the pictures."</p>
                                </div>
                                <div className={`${styles.userRate}`}>
                                    <img alt='' src={user} className={`${styles.userImg}`} />
                                    <div className={`${styles.user__body}`}>
                                        <h3 className={`${styles.user__title}`}>basmala ayman</h3>
                                        <p className={`${styles.user__para}`}>Front-end developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.allSwiper}`}>
                                <div className={`${styles.rate}`}>
                                    <p>"I was impressed by the attention to detail and the exquisite craftsmanship of ithe furniturel purchased from this website. The pieces I received were even more beautiful in person than in the pictures."</p>
                                </div>
                                <div className={`${styles.userRate}`}>
                                    <img alt='' src={user} className={`${styles.userImg}`} />
                                    <div className={`${styles.user__body}`}>
                                        <h3 className={`${styles.user__title}`}>basmala ayman</h3>
                                        <p className={`${styles.user__para}`}>Front-end developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.allSwiper}`}>
                                <div className={`${styles.rate}`}>
                                    <p>"I was impressed by the attention to detail and the exquisite craftsmanship of ithe furniturel purchased from this website. The pieces I received were even more beautiful in person than in the pictures."</p>
                                </div>
                                <div className={`${styles.userRate}`}>
                                    <img alt='' src={user} className={`${styles.userImg}`} />
                                    <div className={`${styles.user__body}`}>
                                        <h3 className={`${styles.user__title}`}>basmala ayman</h3>
                                        <p className={`${styles.user__para}`}>Front-end developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.allSwiper}`}>
                                <div className={`${styles.rate}`}>
                                    <p>"I was impressed by the attention to detail and the exquisite craftsmanship of ithe furniturel purchased from this website. The pieces I received were even more beautiful in person than in the pictures."</p>
                                </div>
                                <div className={`${styles.userRate}`}>
                                    <img alt='' src={user} className={`${styles.userImg}`} />
                                    <div className={`${styles.user__body}`}>
                                        <h3 className={`${styles.user__title}`}>basmala ayman</h3>
                                        <p className={`${styles.user__para}`}>Front-end developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>

        </>
    )
}

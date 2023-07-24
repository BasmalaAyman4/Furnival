import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './HomeSlider.module.css'
import './HomeSlider.css'
import img1 from '../../../assets/image/slider/slide1.webp'
import img2 from '../../../assets/image/slider/slide2.webp'
import img3 from '../../../assets/image/slider/slide3.jpg'
import img4 from '../../../assets/image/slider/slide4jpg.jpg'
import img11 from '../../../assets/image/slider/img1-1.webp'
import img12 from '../../../assets/image/slider/img1-2.webp'
import img21 from '../../../assets/image/slider/img2-1.jpg'
import img22 from '../../../assets/image/slider/img2-2.jpg'
import img41 from '../../../assets/image/slider/img4-1.webp'
import img42 from '../../../assets/image/slider/img4-2.webp'



import { Col, Row } from 'react-bootstrap';
export default function HomeSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className={`${styles.swiperHeader}`}>
                    <img src={img1} className={styles.blur} alt="" />
                    <Row className={`${styles['swiperhome__info']}`}>
                        <Col className={`${styles.descswiper} container`}>
                            <h2>Better interiors</h2>
                            <p>the perfect place for every contemporary furniture store and manufacture. this is furnival</p>
                            <a className={`${styles.shop}`}>View More</a>
                        </Col>
                        <Col className={`${styles.imgeslide}`}>
                            <img src={img11} className={`${styles.sliderImg} ${styles.first}`} alt="" />
                            <img src={img12} className={`${styles.sliderImg} ${styles.second}`} alt="" />
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperHeader}`}>
                    <img src={img2} className={styles.blur} alt="" />
                    <Row className={`${styles['swiperhome__info']}`}>
                        <Col className={`${styles.descswiper} container`}>
                            <h2>Better interiors</h2>
                            <p>the perfect place for every contemporary furniture store and manufacture. this is furnival</p>
                            <a className={`${styles.shop}`}>View More</a>
                        </Col>
                        <Col className={`${styles.imgeslide}`}>
                            <img src={img21} className={`${styles.sliderImg} ${styles.first}`} alt="" />
                            <img src={img22} className={`${styles.sliderImg} ${styles.second}`} alt="" />
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperHeader}`}>
                    <img src={img3} className={styles.blur} alt="" />
                    <Row className={`${styles['swiperhome__info']}`}>
                        <Col className={`${styles.descswiper} container`}>
                            <h2>Better interiors</h2>
                            <p>the perfect place for every contemporary furniture store and manufacture. this is furnival</p>
                            <a className={`${styles.shop}`}>View More</a>
                        </Col>
                        <Col className={`${styles.imgeslide}`}>
                            <img src={img11} className={`${styles.sliderImg} ${styles.first}`} alt="" />
                            <img src={img12} className={`${styles.sliderImg} ${styles.second}`} alt="" />
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperHeader}`}>
                    <img src={img4} className={styles.blur} alt="" />
                    <Row className={`${styles['swiperhome__info']}`}>
                        <Col className={`${styles.descswiper} container`}>
                            <h2>Better interiors</h2>
                            <p>the perfect place for every contemporary furniture store and manufacture. this is furnival</p>
                            <a className={`${styles.shop}`}>View More</a>
                        </Col>
                        <Col className={`${styles.imgeslide}`}>
                            <img src={img41} className={`${styles.sliderImg} ${styles.first}`} alt="" />
                            <img src={img42} className={`${styles.sliderImg} ${styles.second}`} alt="" />
                        </Col>
                    </Row>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

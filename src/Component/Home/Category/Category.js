import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from './Category.module.css'
import category from '../../../Category.json'
import './category.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Category() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    const [sliderBeg, setSliderBeg] = useState({
        isFirst: true,
        isLast: false,
    })
    const swiper = useSwiper();
    const SlideRef = useRef();
    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    }
    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    }
    const onSlideChange = (swiper) => {
        setSliderBeg({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        })
    }
    return (
        <>
            <section className={`${styles.wrapper}`} data-aos="fade-up">
                <div className={`container ${styles.swipbtn}`}>
                    <div className={`${styles.flexCol}`}>
                        <h2 className={`${styles.category__title}`}>shop by category</h2>
                        <div className={` flexCenter ${styles.button} `}>
                            <button className={sliderBeg.isFirst ? 'disabled' : ''} onClick={handlePrev}>&lt;</button>
                            <button className={sliderBeg.isLast ? 'disabled' : ''} onClick={handleNext}>&gt;</button>

                        </div>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        ref={SlideRef}
                        onSlideChange={onSlideChange}
                        breakpoints={{
                            480: {
                                slidesPerView: 1
                            },
                            600: {
                                slidesPerView: 2
                            },
                            750: {
                                slidesPerView: 3
                            },
                            1100: {
                                slidesPerView: 4
                            },
                            1700: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        {

                            category.map((card, i) => (

                                <SwiperSlide key={i}>
                                    <div className={`${styles.showDesc}`}>
                                        <div className={`${styles.slide}`}>
                                            <img src={card.image} className={`${styles.categoryImage}`} />
                                            <div className={`${styles.slideIcon}`}>
                                                <img src={card.icon} className={`${styles.categoryIcon}`} />
                                                <p className={`${styles.categoryTitle}`}>{card.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </section >
        </>
    )
}
/* const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className={` flexCenter ${styles.button} `}>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>

        </div>
    )
} */
import React, { useEffect } from 'react'
import styles from './ModernHome.module.css'
import { Container } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function ModernHome() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <section data-aos="fade-up">
                <Container>
                    <div>
                        <h2 className={`${styles.modermTitle}`}>modern home idea</h2>
                        <div className={`${styles.modermImages}`}>
                            <div className={`${styles.modernImg1}`}>
                                <img alt='' src='https://user-liard-alpha.vercel.app/assets/555-f5869f40.webp' />
                                <div>
                                    <button className={`${styles.modern__btn}`}><p className={`${styles.modern__btnC}`}></p></button>
                                    <div className={`${styles.modern__body}`}>
                                        <h2 className={`${styles.modern__new}`}>new</h2>
                                        <p className={`${styles.modern__para}`}>Frink 71 Upholsterea</p>
                                        <p>28999 LE</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.modernImg2}`}>
                                <img alt='' src='https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp' />
                                <button className={`${styles.modern__btn}`}><p className={`${styles.modern__btnC}`}></p></button>
                                <div className={`${styles.modern__body}`}>
                                    <h2 className={`${styles.modern__new}`}>new</h2>
                                    <p className={`${styles.modern__para}`}>Yellow Chair</p>
                                    <p>8000 LE</p>
                                </div>
                            </div>
                            <div className={`${styles.modernImg3}`}>
                                <img alt='' src='https://res.cloudinary.com/dgfe6etuc/image/upload/v1689584211/productsImageCover/glvoaiprkrhqksftdonu.webp' />
                                <button className={`${styles.modern__btn}`}><p className={`${styles.modern__btnC}`}></p></button>
                                <div className={`${styles.modern__body}`}>
                                    <h2 className={`${styles.modern__new}`}>new</h2>
                                    <p className={`${styles.modern__para}`}>Karling dinning table</p>
                                    <p>12000 LE</p>
                                </div>
                            </div>
                            <div className={`${styles.modernImg4}`}>
                                <img alt='' src='https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583106/productsImageCover/efwmnemew6pfyrkbdf0b.webp' />
                                <button className={`${styles.modern__btn}`}><p className={`${styles.modern__btnC}`}></p></button>
                                <div className={`${styles.modern__body}`}>
                                    <h2 className={`${styles.modern__new}`}>new</h2>
                                    <p className={`${styles.modern__para}`}>Gray Chair</p>
                                    <p>5000 LE</p>
                                </div>
                            </div>
                            <div className={`${styles.modernImg5}`}>
                                <img alt='' src='https://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp' />
                                <button className={`${styles.modern__btn}`}><p className={`${styles.modern__btnC}`}></p></button>
                                <div className={`${styles.modern__body}`}>
                                    <h2 className={`${styles.modern__new}`}>new</h2>
                                    <p className={`${styles.modern__para}`}>Storage unit</p>
                                    <p>3000 LE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

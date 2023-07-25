import React, { useEffect } from 'react'
import styles from './Services.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FiShoppingCart, FiPhoneForwarded, FiGift } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../../assets/image/services.png'
export default function Services() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <section className='' data-aos="fade-down">
                <Container>
                    <h2 className={`${styles.service__title}`}>services</h2>
                    <div className={`${styles.service}`}>

                        <Row className={`${styles.s}`}>

                            <Col className={`${styles.services__body}`}>
                                <FiShoppingCart className={`${styles.icon}`} />
                                <h2 className={`${styles.body__title}`}>fast shipping</h2>
                                <p className={`${styles.body__para}`}>free delivery for order over $100.00</p>
                            </Col>
                            <Col className={`${styles.services__body}`}>
                                <FiPhoneForwarded className={`${styles.icon}`} />
                                <h2 className={`${styles.body__title}`}>online support</h2>
                                <p className={`${styles.body__para}`}>free delivery for order over $100.00</p>
                            </Col>
                            <Col className={`${styles.services__body}`}>
                                <FiGift className={`${styles.icon}`} />
                                <h2 className={`${styles.body__title}`}>gift voucher</h2>
                                <p className={`${styles.body__para}`}>free delivery for order over $100.00</p>
                            </Col>
                            <Col className={`${styles.services__body}`}>
                                <MdPayment className={`${styles.icon}`} />
                                <h2 className={`${styles.body__title}`}>secure payment</h2>
                                <p className={`${styles.body__para}`}>free delivery for order over $100.00</p>
                            </Col>
                        </Row>
                        <img alt='' src={img} className={`${styles.img}`} />
                    </div>
                </Container>
            </section>

        </>
    )
}

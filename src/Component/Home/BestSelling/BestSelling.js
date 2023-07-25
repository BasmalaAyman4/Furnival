import React, { useEffect } from 'react'
import styles from './BestSelling.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import selling from '../../../bestSelling.json'
import { AiFillStar } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function BestSelling() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <section className={`${styles.selling}`} data-aos="fade-down">
                <Container>
                    <h2 className={`${styles.selling__title}`}>best selling</h2>

                    <Row >
                        {
                            selling.map((card, i) => (
                                <Col key={i} className={`${styles.allSelling}`} sm={12} md={6} lg={4}>
                                    <div className={`${styles.sellingCard}`}>
                                        <img src={card.image} className={`${styles.sellingImg}`} />
                                    </div>
                                    <div className={`${styles.selling__body}`}>
                                        <h4 className={`${styles.selling__para}`}>{card.name}</h4>
                                        <div className={`${styles.sellingPrice}`}>
                                            <div className={`${styles.star}`}><AiFillStar /> <span> 4.5 </span></div>
                                            <p>$ {card.price}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

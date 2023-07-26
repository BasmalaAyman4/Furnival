import React from 'react'
import styles from './About.module.css'
import { AiFillHome } from "react-icons/ai";
import { Container, Col, Row, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import img from '../../assets/image/about.png'
import about from '../../assets/image/about-us/vector.png'
import team1 from '../../assets/image/about-us/team1.jpg'
import team2 from '../../assets/image/about-us/team2.jpeg'
import Testimonials from '../Testimonials/Testimonials';

export default function About() {
    return (
        <>
            <section>
                <div className={`${styles.shopImg}`}>
                    <img src={img} alt="" className={`${styles.bulr}`} />
                    <div className={`${styles.shop__body}`}>
                        <h1 className={`${styles.shop__title}`}>about-us</h1>
                        <Breadcrumb className={`${styles.shop__bread}`}>
                            <Breadcrumb.Item href="/" className={`${styles.home}`}><AiFillHome className={`${styles.homeI}`} /> Home</Breadcrumb.Item>
                            <Breadcrumb.Item active className={`${styles.shope}`}>about-us</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <Container>
                    <Row className={`${styles.about__body}`}>
                        <Col md={7} className={`${styles.desc}`}>
                            <h2 className={`${styles.about__title}`}>we pick our team</h2>
                            <p className={`${styles.about__para}`}>Our team is passionate about furniture, and we collaborate effectively to achieve your goals and deliver high-quality work. We're trying to go above and beyond to meet your expectations and deliver exceptional results to make your dream home true</p>
                        </Col>
                        <Col md={5}>
                            <img src={about} alt='' className={`${styles.vector}`} />
                        </Col>
                    </Row>
                    <h2 className={`${styles.about__more}`}>more about us</h2>
                    <Row className={`${styles.about__details}`}>
                        <Col md={4} className={`${styles.details__body}`}>
                            <img src={team1} alt='' className={`${styles.teamsImg}`} />
                        </Col>
                        <Col md={8} className={`${styles.teams__body}`}>
                            <h2 className={`${styles.teams__title}`}>this is how it's began</h2>
                            <p className={`${styles.teams__para}`}>From the initial stages of brainstorming and ideation to the final implementation, our team works hand in hand, pooling our collective talents and perspectives. We foster an environment that encourages open communication, creative thinking, and mutual respect</p>
                        </Col>
                    </Row>
                    <Row className={`${styles.about__details}`}>
                        <Col md={8} className={`${styles.teams__body}`}>
                            <h2 className={`${styles.teams__title}`}>Attention to details</h2>
                            <p className={`${styles.teams__para}`}>We are dedicated to provide our customers with the highest quality furniture that meets their lifestyle. Our team's commitment to meticulous craftsmanship, attention to detail, and a deep understanding of materials ensures that every piece we create reflects our passion for excellence.</p>
                        </Col>
                        <Col md={4} className={`${styles.details__body}`}>
                            <img src={team2} alt='' className={`${styles.teamsImg}`} />
                        </Col>
                    </Row>
                </Container>
                <Testimonials />
            </section>

        </>
    )
}

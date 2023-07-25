import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from './Blogs.module.css'
import img from '../../assets/image/blogs.png'
import { AiFillHome } from "react-icons/ai";
import { Container, Col, Row, Button } from 'react-bootstrap';
import { BsFillCalendarDayFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
export default function Blogs() {
    return (
        <>
            <section>
                <div className={`${styles.shopImg}`}>
                    <img src={img} alt="" className={`${styles.bulr}`} />
                    <div className={`${styles.shop__body}`}>
                        <h1 className={`${styles.shop__title}`}>blogs</h1>
                        <Breadcrumb className={`${styles.shop__bread}`}>
                            <Breadcrumb.Item href="/" className={`${styles.home}`}><AiFillHome className={`${styles.homeI}`} /> Home</Breadcrumb.Item>
                            <Breadcrumb.Item active className={`${styles.shope}`}>Blogs</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className={`${styles.card}`}>
                                <div className={`${styles.card__image}`}>
                                    <img alt="" src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1688460041/blogImage/fcdi8f5vgnuin5fk9yb9.webp" />
                                </div>
                                <div className={`${styles.card__content}`}>
                                    <p className={`${styles.card__title}`}>Eodem modo typi qui nunc</p>
                                    <div className={`${styles.blog__body}`}>
                                        <div className={`${styles.blog__event}`}>
                                            <p> <BsFillCalendarDayFill /> 16 Sep-2024 </p>
                                        </div>
                                        <div>
                                            <p> <BiCommentDetail /> 0 Comments </p>
                                        </div>
                                    </div>
                                    <p className={`${styles.card__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className={`${styles.card__b}`}>
                                        <Button className={`${styles.card__button}`} href="#">Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className={`${styles.card}`}>
                                <div className={`${styles.card__image}`}>
                                    <img alt="" src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1687653146/blogImage/lrfwxbem1rue73dhulys.jpg" />
                                </div>
                                <div className={`${styles.card__content}`}>
                                    <p className={`${styles.card__title}`}>Eodem modo typi qui nunc</p>
                                    <div className={`${styles.blog__body}`}>
                                        <div className={`${styles.blog__event}`}>
                                            <p> <BsFillCalendarDayFill /> 16 Sep-2024 </p>
                                        </div>
                                        <div>
                                            <p> <BiCommentDetail /> 0 Comments </p>
                                        </div>
                                    </div>
                                    <p className={`${styles.card__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className={`${styles.card__b}`}>
                                        <Button className={`${styles.card__button}`} href="#">Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className={`${styles.card}`}>
                                <div className={`${styles.card__image}`}>
                                    <img alt="" src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1687653064/blogImage/s6m4uwiejpp0kqlrwcin.jpg" />
                                </div>
                                <div className={`${styles.card__content}`}>
                                    <p className={`${styles.card__title}`}>Eodem modo typi qui nunc</p>
                                    <div className={`${styles.blog__body}`}>
                                        <div className={`${styles.blog__event}`}>
                                            <p> <BsFillCalendarDayFill /> 16 Sep-2024 </p>
                                        </div>
                                        <div>
                                            <p> <BiCommentDetail /> 0 Comments </p>
                                        </div>
                                    </div>
                                    <p className={`${styles.card__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className={`${styles.card__b}`}>
                                        <Button className={`${styles.card__button}`} href="#">Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className={`${styles.card}`}>
                                <div className={`${styles.card__image}`}>
                                    <img alt="" src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1687652505/blogImage/pvm9wpvcfw6dem3snvcs.jpg" />
                                </div>
                                <div className={`${styles.card__content}`}>
                                    <p className={`${styles.card__title}`}>Eodem modo typi qui nunc</p>
                                    <div className={`${styles.blog__body}`}>
                                        <div className={`${styles.blog__event}`}>
                                            <p> <BsFillCalendarDayFill /> 16 Sep-2024 </p>
                                        </div>
                                        <div>
                                            <p> <BiCommentDetail /> 0 Comments </p>
                                        </div>
                                    </div>
                                    <p className={`${styles.card__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className={`${styles.card__b}`}>
                                        <Button className={`${styles.card__button}`} href="#">Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

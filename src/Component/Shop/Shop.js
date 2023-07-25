import React, { useState, useEffect } from 'react'
import styles from './Shop.module.css'
import img from '../../assets/image/shop.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './shop.css'
import { AiFillHome } from "react-icons/ai";
import { Col, Container, Row } from 'react-bootstrap';
import shopCards from './../../shopCard.json'
import ShopCard from '../Global/ShopCard/ShopCard';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Pagination from '../Global/Pagination';
export default function Shop() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    const [active, setActive] = useState("all")
    const [shopCard, setShopCard] = useState(shopCards)
    const [price, setPrice] = useState(5000);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5);
    const indexofLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexofLastPost - postsPerPage;
    const currentPosts = shopCard.slice(indexofFirstPost, indexofLastPost)
    const colorItems = [...new Set(shopCards.map((val) => val.color))];
    const filterColor = (colorname) => {
        const newColor = shopCards.filter((newval) => {
            return newval.color === colorname;
        });
        setShopCard(newColor);
    };
    const menuItems = [...new Set(shopCards.map((val) => val.category))];
    const filterItem = (categoryname) => {
        const newProduct = shopCards.filter((newval) => {
            return newval.category === categoryname;
        });
        setShopCard(newProduct);
        showActive(categoryname)

    };
    const handleInput = (e) => {
        setPrice(e.target.value);
    }
    const showActive = (view) => {
        setActive(view)
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <>
            <section>
                <div className={`${styles.shopImg}`}>
                    <img src={img} alt="" className={`${styles.bulr}`} />
                    <div className={`${styles.shop__body}`}>
                        <h1 className={`${styles.shop__title}`}>shop</h1>
                        <Breadcrumb className={`${styles.shop__bread}`}>
                            <Breadcrumb.Item href="/" className={`${styles.home}`}><AiFillHome className={`${styles.homeI}`} /> Home</Breadcrumb.Item>
                            <Breadcrumb.Item active className={`${styles.shope}`}>Shop</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <Container>
                    <div className={`${styles.shope__body}`}>
                        <h2 className={`${styles.shope__title}`}>Make your dream home true</h2>
                        <p className={`${styles.shope__para}`}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquam feugiat nunc tortor. Elementum sit urna arcu velit. Blandit odio vestibulum id lacus. Pellentesque turpis vel sed mattis a et eget consectetur sit. Sed tincidunt aliquam feugiat nunc tortor. Elementum sit urna arcu velit. Blandit odio vestibulum id lacus. Pellentesque turpis vel sed mattis a et eget consectetur sit</p>
                    </div>
                    <Row>
                        <Col lg={3} className={`${styles.shopFilter}`} data-aos="fade-left">
                            <h2 className={`${styles.filter__title}`}>filter by :</h2>
                            <p className={`${styles.filter__para}`}>price</p>
                            <div>
                                <label>Price (between 5000 and 25000)</label>
                                <input type="range" id="vol" name="vol" min="5000" max="25000" step="5000" onInput={handleInput} value={price}></input>
                                <div className={`${styles.price__filter}`}>
                                    <p>5000</p>
                                    <p>10000</p>
                                    <p>15000</p>
                                    <p>20000</p>
                                    <p>25000</p>
                                </div>
                            </div>
                            <p className={`${styles.filter__para}`}>rate</p>
                            <div>
                                <label>Rate (between 1 and 5)</label>
                                <input type="range" id="vol" name="vol" min="1" max="5" step="1" value="2"></input>
                                <div className={`${styles.price__filter}`}>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>4</p>
                                    <p>5</p>
                                </div>
                            </div>
                            <div>
                                <p className={`${styles.filter__para}`}>category</p>
                                <div className={`${styles.category__filter}`}>
                                    {menuItems.map((val, id) => {
                                        return (
                                            <p className={`${active === val ? styles.kind : styles.none}`} key={id} onClick={() => { filterItem(val) }}>{val}</p>

                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className={`${styles.filter__para}`}>color</p>
                                <div className={`${styles.category__filter}`}>
                                    {colorItems.map((val, id) => {
                                        return (
                                            <p key={id} onClick={() => { filterColor(val) }}> <span className={`${styles.span} ${val}`}>p </span> {val}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} className={`${styles.shopCards}`} data-aos="fade-up">
                            <ShopCard shopcard={currentPosts} priceCard={price} />
                            <div className={`${styles.allpagi}`}>
                                <Pagination
                                    postsPerPage={postsPerPage}
                                    totalPosts={shopCard.length}
                                    paginate={paginate}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

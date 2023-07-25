import React from 'react'
import styles from './ShopCard.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
const ShopCard = ({ shopcard, priceCard }) => {
    return (
        <>
            <Row >
                {
                    shopcard.filter(card => { return card.price > parseInt(priceCard, 10) }).map((card, i) => (
                        <Col key={i} className={`${styles.allSelling}`} sm={12} md={6} lg={4}>
                            <div className={`${styles.sellingCard}`}>
                                <img src={card.image} className={`${styles.sellingImg}`} />
                            </div>
                            <div className={`${styles.selling__body}`}>
                                <h4 className={`${styles.selling__para}`}>{card.name}</h4>
                                <div className={`${styles.sellingPrice}`}>
                                    <Button className={`${styles.addCart}`}>add to cart</Button>
                                    <p>$ {card.price}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default ShopCard;
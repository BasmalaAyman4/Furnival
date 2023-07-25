import React from 'react'
import styles from './Shop.module.css'
import img from '../../assets/image/shop.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './shop.css'
import { AiFillHome } from "react-icons/ai";
export default function Shop() {
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
            </section>

        </>
    )
}

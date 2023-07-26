import React from 'react'
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import Home from './../pages/Home'
import Shop from './../pages/Shop'
import Blogs from '../pages/Blogs';
import About from '../pages/About';
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

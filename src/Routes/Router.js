import React from 'react'
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import Home from './../pages/Home'
import Shop from './../pages/Shop'
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
        </Routes>
    )
}

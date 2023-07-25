import React from 'react'
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import Home from './../pages/Home'
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    )
}

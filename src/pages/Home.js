import React from 'react'
import HomeSlider from '../Component/Home/HomeSlider/HomeSlider'
import Category from '../Component/Home/Category/Category'
import BestSelling from '../Component/Home/BestSelling/BestSelling'
import ModernHome from '../Component/Home/ModernHome/ModernHome'
import Services from '../Component/Home/Services/Services'

export default function Home() {
    return (
        <div>
            <HomeSlider />
            <Category />
            <BestSelling />
            <ModernHome />
            <Services />
        </div>
    )
}

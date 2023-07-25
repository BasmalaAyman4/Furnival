import React from 'react'
import HomeSlider from '../Component/Home/HomeSlider/HomeSlider'
import Category from '../Component/Home/Category/Category'
import BestSelling from '../Component/Home/BestSelling/BestSelling'
import ModernHome from '../Component/Home/ModernHome/ModernHome'
import Services from '../Component/Home/Services/Services'
import AnimatedPage from './../Component/Global/AnimatedPage'
export default function Home() {
    return (
        <AnimatedPage>
            <div>
                <HomeSlider />
                <Category />
                <BestSelling />
                <ModernHome />
                <Services />
            </div>
        </AnimatedPage>
    )
}

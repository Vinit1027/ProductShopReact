import React,{useState, useEffect} from 'react'
import Footer from './Footer'
import Options from './Options'
import SimilarThings from './SimilarThings'
import SliderCar from './SliderCar'
import './Stylo.css'
import Support from './Support'
import Testimonial from './Testimonial'
import TrendingTabs from './TrendingTabs'

const MainPage = ({data, HandleClick, setProd}) => {


  return (
    <div>
        <SliderCar/>
        <Options/>
        <TrendingTabs data={data} HandleClick={HandleClick} setProd={setProd}/>
        <Testimonial/>
        <SimilarThings data={data} HandleClick={HandleClick} setProd={setProd}/>
        <Support/>
        <Footer/>
    </div>
  )
}

export default MainPage
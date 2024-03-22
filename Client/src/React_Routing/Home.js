import React from 'react'
import HomeSlider from './HOME/HomeSlider'
import OurTaxi from './HOME/OurTaxi'
import Lostthings from './HOME/Lostthings'
import "./HOME/home.css"
import TaxiForm from './Form/TaxiForm'



const Home = () => {
  return (
    <div>
    <HomeSlider/>
    <TaxiForm/>
    <OurTaxi/>
    <Lostthings/>
    
    </div>
  )
}

export default Home
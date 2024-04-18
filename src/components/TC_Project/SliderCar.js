import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Routes, Route, useNavigate } from 'react-router-dom';
import './Stylo.css'

function SliderCar() {

  const navigate = useNavigate();


  const navPhone = ()=>{
    navigate('/phones');
  }

  const navLaptops =()=> {
    navigate('/laptops');
  }

  const navAuto = ()=> {
    navigate('/automotives')
  }

  return (
    <Carousel>
      <Carousel.Item>
        <div className='d-block bkgthig' alt="First slide"></div>
        <Carousel.Caption  className='cstmcs'>
          <h3 className='cpex'>Explore Different Ranges of Smartphones</h3>
          <button className='shsp' onClick={navPhone}>Shop</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block bkgthig2 ' alt="First slide"></div>
        <Carousel.Caption className='cstmcs2'>
          <h3 className='cpex'>Explore Various Brands Of Laptops</h3>
          <button className='shsp' onClick={navLaptops}>Shop</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block bkgthig3' alt="First slide"></div>
        <Carousel.Caption className='cstmcs3'>
          <h3 className='cpex2'>Explore Automotive Parts</h3>
          <button className='shsp' onClick={navAuto}>Shop</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderCar;
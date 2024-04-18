import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Stylo.css'

const Sale = () => {

  const navigate = useNavigate();

  const ToAllProducts =()=> {
    navigate('/all')
  }
  
  return (
    <section className='padbetween6 text-center'>
        <p className='shnw5'>
            Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer <button onClick={ToAllProducts} className='rtyu'>Shop Now</button>
        </p>
    </section>
  )
}

export default Sale
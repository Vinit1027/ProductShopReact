import React, {useState, useEffect, uesRef, useRef} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import All from './All'
import Automotives from './Automotives'
import Cart from './Cart'
import Laptops from './Laptops'
import MainPage from './MainPage'
import NavBar from './NavBar'
import Phone from './Phone'
import Phones from './Phones'
import ProductDetails from './ProductDetails'

const Ecom = () => {

  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);

  const [prod, setProd] = useState([]);

  const [warning, setWarning] = useState(false);

  const GetPh = useRef()

  const HandleClick = (item)=> {
    let isPresent = false
    cart.forEach((product)=> {
      if(item.id === product.id){
        isPresent = true;
      }
    })
    if(isPresent){
      setWarning(true);
      setTimeout(()=> {
        setWarning(false); 
      }, 2000)
      return;
    }
    setCart([...cart, item])
  }


  useEffect(()=> {
    // console.log(cart)
  }, [cart])

  useEffect(()=> {
    console.log(prod)
  },[prod])


  useEffect(()=> {


      fetch('https://dummyjson.com/products?limit=0')
      .then(res => res.json())
      .then(json => setData(json.products))
                  
                  
  }, [])

  return (
    <div>
      <Router>
        <NavBar size={cart.length}/>
          <Routes>
            <Route path='/ProductShopReact' element={<MainPage data={data} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/all' element={<All data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route ref={GetPh} path='/phones' element={<Phones data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/laptops' element={<Laptops data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/automotives' element={<Automotives data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='/productdetails' element={<ProductDetails prod={prod} HandleClick={HandleClick}/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default Ecom
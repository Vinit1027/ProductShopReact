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

  const [cart2, setCart2] = useState([]);

  const [cartWithQuantity, setCartWithQuantity] = useState([]);

  const [prod, setProd] = useState([]);

  const [warning, setWarning] = useState(false);

  const GetPh = useRef()


  console.log(cart)


  useEffect(()=>{

        setCart2(cart);


        const initialCartWithQuantity = cart.map((item) => ({...item, quantity: 1, }));

        setCartWithQuantity(initialCartWithQuantity);

    },[cart])


    const initialValue = 0;
    const total = cartWithQuantity.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialValue);


    const incrementQuantity = (element) => {

        const updatedcart = cartWithQuantity.map((item)=>{

            return item.id === element.id ? { ...item, quantity: item.quantity + 1 } : item

        })

        setCartWithQuantity(updatedcart)
    };

    const decrementQuantity = (element) => {

        const updatedcart2 = cartWithQuantity.map((item)=>{

            return item.id === element.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        })
        setCartWithQuantity(updatedcart2);
    };


    const handleRemove = (element)=> {

        console.log(element)

        const arr = cartWithQuantity.filter((x)=> x.id !== element.id);
        setCartWithQuantity(arr)
    }








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


  // useEffect(()=> {
  //   // console.log(cart)
  // }, [cart])

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
        <NavBar size={cartWithQuantity.length}/>
          <Routes>
            <Route path='/ProductShopReact' element={<MainPage data={data} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/all' element={<All data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route ref={GetPh} path='/phones' element={<Phones data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/laptops' element={<Laptops data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/automotives' element={<Automotives data={data} warning={warning} HandleClick={HandleClick} setProd={setProd}/>}/>
            <Route path='/cart' element={<Cart cartWithQuantity={cartWithQuantity} total={total} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} handleRemove={handleRemove}/>}/>
            <Route path='/productdetails' element={<ProductDetails prod={prod} HandleClick={HandleClick}/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default Ecom
import React,{useRef, useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Cart.css'
import Footer from './Footer';

const Cart = ({cart, setCart}) => {

    const [cart2, setCart2] = useState([]);

    const [cartWithQuantity, setCartWithQuantity] = useState([]);

    const [price, setPrice] = useState(0);

    const [incdc, setIncdc] = useState(1)

    useEffect(()=>{

        setCart2(cart);


        const initialCartWithQuantity = cart.map((item) => ({...item, quantity: 1, }));

        setCartWithQuantity(initialCartWithQuantity);

    },[])


    const initialValue = 0;
    const total = cartWithQuantity.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialValue);

    const handlePrice = ()=> {
        let ans = 0;
        cart.map((item)=> {
            ans += item.price 
        })
        setPrice(ans)
    }


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

    useEffect(()=> {
        handlePrice();
    })

    const handleRemove = (element)=> {

        console.log(element)

        const arr = cartWithQuantity.filter((x)=> x.id !== element.id);
        setCartWithQuantity(arr)
    }

  return (
    <section>
        <div className='bkpk'>
            <div className='container d-flex justify-content-center'>
                <div>
                    <h3>Cart</h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb nopadunder justify-content-center">
                            <li className="breadcrumb-item">
                                <NavLink className='nounder' to="/">Home</NavLink>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div className='padbetween3'>
            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-4'>Product</div>
                    <div className='col col-lg-2 text-center'>Price</div>
                    <div className='col col-lg-2 text-center'>Quantity</div>
                    <div className='col col-lg-2 text-center'>Total</div>
                    <div className='col col-lg-2 text-center'></div>
                </div>
                {
                    cartWithQuantity.map((el,index)=> {

                        let initialProdvalue = 0

                        const filterprodprice = cartWithQuantity.filter((element)=> {
                                return element.id === el.id
                            })

                        const totalprodprice = filterprodprice.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialProdvalue);

                        return (
                        <div key={el.id} className='row allcov'>
                            <div className='col col-lg-4'>
                                <div  className='d-flex'>
                                    {
                                        el.images.map((x,y)=> {
                                            if(y===0){
                                                const bgig = {
                                                    backgroundImage: `url(${x})`,
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: "center",
                                                    height:"120px",
                                                    width: "180px",
                                                    border: '1px solid rgb(196 191 186)',
                                                    borderRadius: '4px'
                                                }
                                                return (

                                                    <div key={x.id} style={bgig}></div>

                                                )
                                            }
                                        })
                                    }
                                    <div  className='macm'> 
                                        <p>{el.title}</p>
                                        <p>{el.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col col-lg-2 text-center'>{el.price}$</div>
                            <div className='col col-lg-2 text-center'>
                                <button className='ladders' onClick={()=>decrementQuantity(el)}>-</button>
                                <span className='ladders2'>{el.quantity}</span>
                                <button className='ladders' onClick={()=>incrementQuantity(el)}>+</button>
                            </div>
                            <div className='col col-lg-2 text-center'>{totalprodprice}$</div>
                            <div className='col col-lg-2 text-center'><button className='ladders3' onClick={()=> handleRemove(el)}>Delete</button></div>
                        </div>
                        )
                    })
                }
                <div className='row allcov'>
                    <div className='col col-lg-4'></div>
                    <div className='col col-lg-2 text-center'></div>
                    <div className='col col-lg-2 text-center'>Final Price : </div>
                    <div className='col col-lg-2 text-center'>{total}$</div>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Cart
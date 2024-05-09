import React,{useRef, useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Cart.css'
import Footer from './Footer';

const Cart = ({ cartWithQuantity, total, incrementQuantity, decrementQuantity, handleRemove }) => {

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
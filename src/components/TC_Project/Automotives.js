import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate} from 'react-router-dom'
import Footer from './Footer';
import './Phone.css'

const Automotives = ({data, warning, HandleClick, setProd}) => {

  const navigate = useNavigate()

  const ChangePathPro = (r)=> {
    setProd([r])
    navigate('/productdetails')
  }

  return (
    <section>
        <div className='bkpk'>
            <div className='container d-flex justify-content-center'>
                <div>
                    <h3>Automotives</h3>
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
        {
            warning && <div>Item is already added to cart</div>
        }
        <div className='container my-5'>
        <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='automotive'){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6 mb-4'>
                            <div className='allic'>
                              <div className='phig'>
                                {
                                          el.images.map((x,y)=> {
                                              if(y===0){
                                                  const bgig = {
                                                      backgroundImage: `url(${x})`,
                                                      backgroundSize: 'contain',
                                                      backgroundRepeat: 'no-repeat',
                                                      backgroundPosition: "center",
                                                      height:"200px",
                                                  }
                                                  return (
                                                      <>
                                                          <div key={x.id} style={bgig} onClick={()=>ChangePathPro(el)}></div>
                                                      </>
                                                  )
                                              }
                                          })
                                }
                                <div className='multicon d-flex justify-content-center'>
                                  <button className='unpd' onClick={()=> HandleClick(el)}>
                                    <i className="fal fa-cart-plus"></i>
                                  </button> 
                                  <button className='unpd'>
                                    <i className="fal fa-heart"></i>
                                  </button>
                                  <button className='unpd'>
                                    <i className="fal fa-search-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div className='bdelic'>
                                <div>
                                    <h3 className='eltit'>
                                      <button>{el.title}</button>
                                    </h3>
                                    <p className='text-center'>{el.description}</p>
                                    <div className='d-flex justify-content-center align-items-center dayum'>
                                      <div className='price text-center'>
                                        <span className='asdf'>
                                          ${el.price}
                                          <span className='dispc'>${el.price * 1.2}</span>
                                        </span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        )
                      }
                    })
                  }
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Automotives
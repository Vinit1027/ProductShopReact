import React from 'react'
import { NavLink} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from './Footer'
import './ProductDetails.css'
const ProductDetails = ({prod, HandleClick}) => {
    
  return (
    <section>
          <div className='bkpk'>
            <div className='container d-flex justify-content-center'>
                <div>
                    <h3>Product Details</h3>
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
        <div className='padbetween11'>
          <div className='container'>
            {
              prod.map((el,index)=> {
                return (
                  <>
                    <div className='row'>
                      <div className='col col-xl-12'>
                        <div className='single-services d-flex align-items-center'>
                        {
                                          el.images.map((x,y)=> {
                                              if(y===0){
                                                  const bgig = {
                                                      backgroundImage: `url(${x})`,
                                                      backgroundSize: 'contain',
                                                      backgroundRepeat: 'no-repeat',
                                                      backgroundPosition: "center",
                                                      height:"300px",
                                                      width: '300px',
                                                  }
                                                  return (
                                                      <>
                                                          <div key={x.id} style={bgig}></div>
                                                      </>
                                                  )
                                              }
                                          })
                                }
                          {/* <div className='prodimg'></div> */}
                          <div className='features-caption'>
                            <h3>{el.title}</h3>
                            <p>By {el.brand}</p>
                            <div className='price2'>
                              <span>${el.price}</span>
                            </div>
                            <button className='prodcart' onClick={()=> HandleClick(el)}>Add to Cart</button>
                            <botton className='prodshare'>
                              <i class="fal fa-share-alt"></i>
                            </botton>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='padbetween12'>
                        <div>
                          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="paramb justify-content-start">
                            <Tab eventKey="profile" title="Description" className='active'>
                              <p>{el.description}</p>
                            </Tab>
                            <Tab eventKey="home" title="Author">
                              <p>yolo</p>
                            </Tab>
                            <Tab eventKey="contact" title="Comments">
                              <p>dgsfdg</p>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <Footer/>
    </section>
  )
}

export default ProductDetails
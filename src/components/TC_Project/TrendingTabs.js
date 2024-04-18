import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import './Stylo.css';

const TrendingTabs = ({data, HandleClick, setProd}) => {

  const navigate = useNavigate()

  const ChangePathPro = (r)=> {
    setProd([r])
    navigate('/productdetails')
  }
  return (
    <section className='padbetween7'>
      <div className='container'>
        <div className='text-center'>
          <h3 className='tradth'>Trending This Week</h3>
        </div>
        <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 justify-content-end">
          <Tab eventKey="profile" title="Mobile Phones">
            <Carousel className='djent'>
              <Carousel.Item>
                <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='smartphones' && index <=3){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='smartphones' && index <=3){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='smartphones' && index <=3){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
            </Carousel>
          </Tab>
          <Tab eventKey="home" title="Laptops">
          <Carousel className='djent'>
              <Carousel.Item>
                <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='laptops' && index>=5 && index<=8){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='laptops' && index>=5 && index<=8){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='laptops' && index>=5 && index<=8){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
            </Carousel>
          </Tab>
          <Tab eventKey="contact" title="Automotives">
          <Carousel className='djent'>
              <Carousel.Item>
                <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='automotive' && index>=85 && index<=88){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='automotive' && index>=85 && index<=88){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='automotive' && index>=85 && index<=88){
                        return (
                          <div key={el.id} className='col col-lg-3 col-md-6 col-sm-6'>
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
              </Carousel.Item>
            </Carousel>
          </Tab>
        </Tabs>
        </div>
      </div>
    </section>
  )
}

export default TrendingTabs
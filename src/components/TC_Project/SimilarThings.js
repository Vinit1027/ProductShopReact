import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const SimilarThings = ({data, HandleClick, setProd}) => {

  const navigate = useNavigate()

  const ChangePathPro = (r)=> {
    setProd([r])
    navigate('/productdetails')
  }

  return (
    <section className='padbetween9'>
        <div className='row'>
            <div className='col-xl-12'>
                <div className='section-title text-center'>
                    <h2 className='yml'>You May Like</h2>
                </div>
            </div>
        </div>
        <div className='container'>
            <Carousel className='djent'>
              <Carousel.Item>
                <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='smartphones'|| el.category==='laptops' || el.category==='automotive'){
                        if(index === 1 || index === 6 || index === 88 || index === 89){
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
                      }
                    })
                  }
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='smartphones'|| el.category==='laptops' || el.category==='automotive'){
                        if(index === 2 || index === 7 || index === 86 || index === 88){
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
                      }
                    })
                  }
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className='row'>
                  {
                    data.map((el,index)=> {
                      if(el.category==='smartphones'|| el.category==='laptops' || el.category==='automotive'){
                        if(index === 3 || index === 7 || index === 85 || index === 86){
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
                      }
                    })
                  }
                </div>
              </Carousel.Item>
            </Carousel>
        </div>
    </section>
  )
}

export default SimilarThings
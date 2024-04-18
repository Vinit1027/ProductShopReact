import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = () => {
  return (
    <section className='padbetween8'>
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <div className='text-center'>
                        <h2 className='teshead'>Customer Testimonial</h2>
                        <p className='tescont'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                    </div>
                    <div className='testimonial-founder d-flex justify-content-center align-items-center'>
                        <div className='founder-img'></div>
                        <div className='founder-text'>
                            <span>Petey Cruiser</span>
                            <p>Designer at Colorlib</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='text-center'>
                        <h2 className='teshead'>Customer Testimonial</h2>
                        <p className='tescont'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                    </div>
                    <div className='testimonial-founder d-flex justify-content-center align-items-center'>
                        <div className='founder-img'></div>
                        <div className='founder-text'>
                            <span>Petey Cruiser</span>
                            <p>Designer at Colorlib</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='text-center'>
                        <h2 className='teshead'>Customer Testimonial</h2>
                        <p className='tescont'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                    </div>
                    <div className='testimonial-founder d-flex justify-content-center align-items-center'>
                        <div className='founder-img'></div>
                        <div className='founder-text'>
                            <span>Petey Cruiser</span>
                            <p>Designer at Colorlib</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
  )
}

export default Testimonial
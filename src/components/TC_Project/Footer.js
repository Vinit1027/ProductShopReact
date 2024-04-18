import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='padbetween5'>
        <div className='container'>
            <div className='row justify-content-between newsbor'>
                <div className='col col-xxl-3 col-xl-3 col-lg-4'>
                    <h3 className='subs'>Subscribe Newsletter</h3>
                    <p className='news'>Subscribe newsletter to get 5% on all products.</p>
                </div>
                <div className='col col-xxl-5 col-xl-6 col-lg-7 col-md-9'>
                    <div className='midcssr'>
                        <input type="text" placeholder="Enter your email"/>
                        <button class="subscribe-btn">Subscribe</button>
                    </div>
                </div>
                <div className='col col-xxl-2 col-xl-2 col-lg-4'>
                    <div className='footer-social'>
                        <a>
                            <i class="fab fa-facebook glowbut"></i>
                        </a>
                        <a>
                            <i class="fab fa-instagram glowbut"></i>
                        </a>
                        <a>
                            <i class="fab fa-youtube glowbut"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row justify-content-between newsbor2'>
                <div className='col col-xl-3 col-lg-3 col-md-6 col-sm-8'>
                    <div>
                        <h4 className='shprert'>Product Shop</h4>
                    </div>
                </div>
                <div className='col col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                    <div className='text-center'>
                        <h5 className='shprert2'>Shop Mobile Phones</h5>
                    </div>
                </div>
                <div className='col col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                    <div className='text-center'>
                        <h5 className='shprert2'>Shop Laptops</h5>
                    </div>
                </div>
                <div className='col col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                    <div className='text-center'>
                        <h5 className='shprert2'>Shop Automotives</h5>
                    </div>
                </div>
                <div className='col col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                    <div className='text-center ql'>
                        <h5 className='shprert3'>Quick-Links</h5>
                        <p>Track Your Orders</p>
                        <p>FAQ</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col col-xl-12'>
                    <div className='text-center'>
                        <p className='crpr'>Copyright ©2023 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
import React from 'react'
import './Stylo.css'
import { useNavigate } from 'react-router-dom'

const Options = () => {

    const navigate = useNavigate();

    const GoToPhone = ()=>{
        navigate('/Phones');
    }
    const GoToLaptops = ()=>{
        navigate('/Laptops');
    }
    const GoToAuto = ()=>{
        navigate('/Automotives');
    }
  return (
    <section className='padbetween2'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center'>
                    <div className='singleItems'>
                        <div className='overallbx'>
                            <div className='bkig'></div>
                        </div>
                        <div className='ctr'>
                            <h4>Mobile Phones</h4>
                            <button onClick={GoToPhone}>Check Out</button>
                        </div>
                    </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center'>
                    <div className='singleItems'>
                        <div className='overallbx'>
                            <div className='bkig2'></div>
                        </div>
                        <div className='ctr'>
                            <h4>Laptops</h4>
                            <button onClick={GoToLaptops}>Check Out</button>
                        </div>
                    </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center'>
                    <div className='singleItems'>
                        <div className='overallbx'>
                            <div className='bkig3'></div>
                        </div>
                        <div className='ctr'>
                            <h4>Automotives</h4>
                            <button onClick={GoToAuto}>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Options
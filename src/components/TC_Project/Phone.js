import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'
import './Phone.css'

const Phone = ({data, HandleClick}) => {
  return (
    <section>
        <div className='bkpk'>
            <div className='container d-flex justify-content-center'>
                <div>
                    <h3>Mobile Phone</h3>
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
        <div className='container my-5'>
            <div className='row'>
                {
                    data.map((el,index)=> {
                        if(el.category==='smartphones'){
                            return (
                                <div key={el.id} className='col col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center my-3'>
                                    <Card style={{ width: '18rem' }}>
                                        {
                                            el.images.map((x,y)=> {
                                                if(y===0){
                                                    const bgig = {
                                                        backgroundImage: `url(${x})`,
                                                        backgroundSize: 'contain',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: "center",
                                                        height:"150px"
                                                    }
                                                    return (
                                                        <div key={x.id} style={bgig}></div>
                                                    )
                                                }
                                            })
                                        }
                                        <div className='bde'>
                                            <Card.Body>
                                                <Card.Title>{el.title}</Card.Title>
                                                <Card.Text>{el.description}</Card.Text>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <Button variant="primary" onClick={()=> HandleClick(el)}>Add to Cart</Button>
                                                    <p style={{marginBottom: '0px'}}>{el.price}$</p>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Phone
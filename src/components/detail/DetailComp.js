import React, { useState } from 'react'
import {Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cardSlice';

function DetailComp({productDetail}) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const decrement = () => {
    if(quantity>0) setQuantity(quantity - 1)
  }

  const increment = () => {
    if(quantity< productDetail?.rating?.count) setQuantity(quantity + 1)
  }

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price:productDetail?.price, quantity: quantity}))
  }

  return (
    <Container>
        <div className="card mb-3 mt-5 m-auto" style={{ maxWidth: '1000px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={productDetail?.image} className="img-fluid rounded-start p-3" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body p-5">
                    <h3 className="card-title">{productDetail?.title}</h3>
                    <p className="card-text fs-4">{productDetail?.description}</p>
                    <p className="card-text fs-4">Rating : {productDetail?.rating?.rate}</p>
                    <p className="card-text fs-4">Count : {productDetail?.rating?.count}</p>
                    <p className="card-text fs-4 text-danger">{productDetail?.price} <span>TL</span> </p>
                    <div className='d-flex'>
                      <div className='btn btn-dark m-1 fs-4' onClick={decrement}>-</div>
                      <input className='text-center border-0 fs-4'  style={{ width: '30px'}} value={quantity} type='text'/>
                      <div className='btn btn-dark m-1 fs-4' onClick={increment}>+</div>
                    </div>
                    <div onClick={addBasket} className='btn btn-warning m-1 fs-4'>SEPETE EKLE</div>
                </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default DetailComp
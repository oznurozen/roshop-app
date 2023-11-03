import React from 'react'
import {Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cardSlice';

function CartComp({cart}) {
  const dispatch = useDispatch();
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <Container>
      <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-1">
                <img src={cart?.image} className="img-fluid rounded-start p-3" alt="..."/>
                </div>
                <div className="col-md-11">
                <div className="card-body p-5">
                    <div className="card-body">
                      {cart?.title}  &nbsp;&nbsp;&nbsp;&nbsp; {cart?.price} <span>TL</span> 
                      ({cart?.quantity}) &nbsp;&nbsp;&nbsp;&nbsp; 
                      <span onClick={() => dispatch(removeFromCart(cart?.id, refreshPage()))} className='btn btn-danger'>Ürünü Sil</span></div>
                </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default CartComp
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cardSlice';
import CartComp from '../components/cart/CartComp';

function Cart() {
  
  const dispatch = useDispatch()
  const {carts, totalAmount, itemCount} = useSelector(state => state.carts)

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(()=> {
    dispatch(getCartTotal())
  },[dispatch])
  return (
    <div>
        {
            carts?.length > 0 ? <div>
                {
                    carts?.map((cart,i)=>(
                        <CartComp key={i} cart={cart}/> 
                    ))
                }
                <div className='text-end fs-4'>TOPLAM TUTAR : <span className='fw-bold'>{totalAmount} TL</span></div>
               
            </div>:
            <div>
                Kartınız Boş...
            </div>
        }
    </div>
  )
}

export default Cart
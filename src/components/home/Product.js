import React from 'react'
import { useNavigate } from 'react-router-dom'


function Product({product}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`products/${product?.id}`)}>
        <img style={{ width: '150px', height: '150px'}} className='p-2'  src={product?.image}  alt="" />
    </div>
  )
}

export default Product
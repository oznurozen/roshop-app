import React from 'react'

function Product({product}) {
  return (
    <div>
        <img style={{ width: '150px', height: '150px'}} className='p-2'  src={product?.image}  alt="" />
    </div>
  )
}

export default Product
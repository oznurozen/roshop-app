import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Col, Card, Button} from 'react-bootstrap';


function Product({product}) {
  const navigate = useNavigate();
  return (
   

<Col xl={4} lg={6} sm={12}>
<Card className='mt-2 text-center'>
    <div onClick={()=> navigate(`products/${product?.id}`)}>
        <img style={{ width: '150px', height: '150px'}} className='p-2'  src={product?.image}  alt="" />
    </div>
  <Card.Body>
    <Card.Title>{product?.title}</Card.Title>
    <Card.Text>
      {product?.price} <span>TL</span>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
    
  )
}

export default Product
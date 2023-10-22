import React, { useEffect } from 'react'
import {Col, Card, Button, Row} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice';
import Loading from "../Loading";
import Product from './Product';

function Products() {
  const dispatch = useDispatch();
  const {products, productsStatus} = useSelector(state => state.products);

  console.log(products, "products");

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);
  return (
    <Col lg={9} className='' >
     <Row>
      
        {
          productsStatus === "LOADİNG" ? <Loading/>:
          <>
            {
              products?.map((product,i)=>(
                <Col xl={3} lg={4} sm={6}>
                  <Card className='mt-2 text-center'>
                      <Product key={i} product={product}/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                  
                
              ))
            }
          </>
        }
    
     </Row>
    </Col>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import {Col, Card, Button, Row} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import Loading from "../Loading";
import Product from './Product';
import ReactPaginate from 'react-paginate';

function Products({category, sort}) {
  const dispatch = useDispatch();
  const {products, productsStatus} = useSelector(state => state.products);

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(sort, "sort");

  useEffect(()=>{
    if(category){
      dispatch(getCategoryProducts(category))
    }else{
      dispatch(getProducts())
    }
  },[dispatch,category]);
  return (
    <Col lg={9} className='' >
     <Row>
        {
          productsStatus === "LOADİNG" ? <Loading/>:
          <>
            {
              currentItems?.sort((a,b)=>sort === "inc" ? a.price-b.price: sort === "dec" ? b.price-a.price : "")?.map((product,i)=>(
                <Col xl={4} lg={6} sm={12}>
                  <Card className='mt-2 text-center'>
                      <Product key={i} product={product}/>
                    <Card.Body>
                      <Card.Title>{product?.title}</Card.Title>
                      <Card.Text>
                        {product?.price} <span>TL</span>
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>     
              ))
            }
            <ReactPaginate
              className='paginate'
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>


        }
     </Row>
    </Col>
  )
}

export default Products
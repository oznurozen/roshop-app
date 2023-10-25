
import {Container, Row, Col} from 'react-bootstrap';
import Slider from '../components/home/Slider'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import { useState } from 'react';

function Home() {
  const [sort, setSort] = useState();
  const [category, setCategory] = useState();

  return (
    <div>
      <Slider/>
      <Container>
        <Row>
          <Col>
            <Sorting setSort={setSort}/>
            <Row className='mt-5'>
              <Category setCategory= {setCategory}/>
              <Products category={category} sort={sort}/>
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home
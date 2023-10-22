
import {Container, Row, Col} from 'react-bootstrap';
import Slider from '../components/home/Slider'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

function Home() {

  return (
    <div>
      <Slider/>
      <Container>
        <Row>
          <Col>
            <Sorting/>
            <Row className='mt-5'>
              <Category/>
              <Products/>
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home
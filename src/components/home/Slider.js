import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carosel1 from '../../assets/images/carosel1.png';
import carosel2 from '../../assets/images/carosel2.png';
import carosel3 from '../../assets/images/carosel3.png';


function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
  return (
    
    <div>
         <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
      className='w-100'
            src={carosel1}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
       className='w-100'
           src={carosel2}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
       className='w-100'
           src={carosel3}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
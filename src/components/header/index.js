import React, { useEffect } from 'react'
import {Container, Form, Nav, Navbar} from 'react-bootstrap';
import {SlBasket} from 'react-icons/sl';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../redux/cardSlice';
import { useNavigate } from 'react-router-dom';



function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {itemCount} = useSelector(state => state.carts)

  // console.log(carts, "carts");

  useEffect(()=> {
    dispatch(getCartTotal())
  },[dispatch])
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>   
            
          </Nav>
          <Form className="d-flex">
            <div className='searchInput icon'>
                <input 
                variant="sucses"
                type="search"
                placeholder="Arama Yapınız"
                aria-label="Search"
              />
              <BiSearch size={28}/>

            </div>
            <div className='icon'>
              <AiOutlineHeart size={28}/>
            </div>
            
            <div onClick={() => navigate("cart")} className='icon'>
              <div className='basket' >{itemCount}</div>
              <SlBasket size={28}/>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
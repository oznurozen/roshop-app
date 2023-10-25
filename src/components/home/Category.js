import React, { useEffect } from 'react'
import {Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

function Category({setCategory}) {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    console.log(categories, "categories");

    useEffect(() =>{
        dispatch(getCategories())
    }, [dispatch])
  return (
    <Col lg={3}>
        <div className='fs-4 fw-bolder pb-2'>KATEGORİ</div>
            {
                categories?.map((category,i)=> (
                    <div onClick={() => setCategory(category)} className='category' key={i}>{category}</div>
                ))
            }
        
    </Col>

  )
}

export default Category
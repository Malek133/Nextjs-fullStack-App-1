import React from 'react'
import DetailProduct from '../components/DetailProduct'
import { getAllProductActions } from '@/actions/productActions';


const GridProducts = async() => {
    const products = await getAllProductActions();
  return (
    <div className='mx-40 my-6'>
      <DetailProduct products={products} />
    </div>
  )
}

export default GridProducts
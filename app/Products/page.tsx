import React from 'react'
import TableAllProduct from '../components/TableAllProductsc'
import { getAllProductActions } from '@/actions/productActions';

const pageAllProducts = async() => {

  const products = await getAllProductActions();
  return (
    
    <div className='mx-20 my-6'>
      <TableAllProduct products={products} />
    </div>
    
  )
}

export default pageAllProducts

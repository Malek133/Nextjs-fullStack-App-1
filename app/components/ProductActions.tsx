'use client'

import { deleteProductActions } from '@/actions/productActions';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/Spinner';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import EditProductForm from './EditProductForm';
import { IProduct } from '@/interface';

const ProductActions = ({product}:{product:IProduct}) => {
    const [loading,setLoading]= useState(false)
  return (
    <main className='flex space-x-4'>
      
               <EditProductForm key={product.id} product={product} />

              <Button className="bg-red-600 text-white 
              hover:text-black hover:bg-slate-50" 
            onClick={async () => {
               if(product.id){
                setLoading(true);
                  await deleteProductActions({ id: product?.id });
                  setLoading(false);
               }
                  
              }}
               >
                {loading ? <Spinner /> :<Trash2 size={16} />}
               </Button>
    </main>
  )
}

export default ProductActions

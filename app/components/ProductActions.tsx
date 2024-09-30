'use client'

import { deleteProductActions } from '@/actions/todoActions';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/Spinner';
import { Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';

const ProductActions = ({id}:{id:string}) => {
    const [loading,setLoading]= useState(false)
  return (
    <>
      <Button className="bg-green-600 text-white 
              hover:text-black hover:bg-slate-50"
               ><Pencil size={16} /></Button>
              <Button className="bg-red-600 text-white 
              hover:text-black hover:bg-slate-50" 
              onClick={async ()=>{
                  setLoading(true)
                  await deleteProductActions({id});
                  setLoading(false)
                }
                }
               >
                {loading ? <Spinner /> :<Trash2 size={16} />}
               </Button>
    </>
  )
}

export default ProductActions

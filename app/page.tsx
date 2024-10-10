
 import { getProductActions } from "@/actions/productActions";

import AddProductForm from "@/components/ui/AddProductForm";
import TableProduct from "./components/TableProduct";
import { auth } from "@clerk/nextjs/server";
import { LayoutPanelLeft,Sheet } from 'lucide-react';



export default async function  Home() {

  const {userId} = auth()
 const products = await getProductActions({userId});

  return (
   <main>
    
     <div 
     className="flex justify-between items-center p-8 pb-4 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    > 
       <AddProductForm userId={userId} /> 
    </div>

    <ul className="flex justify-start items-center space-x-3 mx-20 my-6">
      <li>
        <Sheet />
      </li>
      <li>
        <LayoutPanelLeft />
      </li>
    </ul>

     <div className="mx-20">
     <TableProduct products={products} />
       </div>

    </main>
   
  );
}

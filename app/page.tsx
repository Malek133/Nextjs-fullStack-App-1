
 import { getProductActions } from "@/actions/productActions";

import AddProductForm from "@/components/ui/AddProductForm";
import TableProduct from "./components/TableProduct";
import { auth } from "@clerk/nextjs/server";



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

     <div className="mx-20">
     <TableProduct products={products} />
       </div>

    </main>
   
  );
}

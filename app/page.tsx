
 import { getProductActions } from "@/actions/todoActions";

import AddProductForm from "@/components/ui/AddProductForm";
import TableProduct from "./components/TableProduct";



export default async function  Home() {
 const products = await getProductActions();

  return (
   <main>
    
     <div 
     className="flex justify-between items-center p-8 pb-4 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    > 
       <AddProductForm /> 
    </div>

     <div className="mx-20">
     <TableProduct products={products} />
       </div>

    </main>
   
  );
}

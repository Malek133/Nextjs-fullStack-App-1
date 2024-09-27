
 import { getProductActions } from "@/actions/todoActions";

import AddProductForm from "@/components/ui/AddProductForm";


export default async function  Home() {
 const products = await getProductActions();

  return (
   <main>
    
     <div 
     className="flex justify-between items-center p-8 pb-4 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    > 
      
       <AddProductForm /> 

    </div> 
      <div className="grid grid-cols-8 gap-4 mx-5">
      {products && products.map(product => (
       <li key={product.id}>
      {product.title}
       </li>
       ))}
      </div> 
    </main>
   
  );
}

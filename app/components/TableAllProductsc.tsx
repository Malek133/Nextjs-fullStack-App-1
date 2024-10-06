

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   import { Eye } from 'lucide-react';
import { IProduct } from "@/interface";
import { Button } from "@/components/ui/button";



  interface TableProductProps {
    products: IProduct[];
  }
  
  
    const TableAllProduct: React.FC<TableProductProps> = (
        { products}
    ) => {
      
     
    return (
      <main>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow> 
          
            <TableHead>Title</TableHead>
             <TableHead>Price</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead >Details</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {products && products.map((product) => (
            <TableRow key={product.id}>
              
              <TableCell>{product.title}</TableCell>
               <TableCell>{product.price}</TableCell> 
              <TableCell>{product.completed ? "true" : "false"}</TableCell>
              <TableCell>
                <Button ><Eye size={24} /></Button> 
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Totale</TableCell>
            <TableCell className="text-right">{products.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </main>
    )
  }

  export default TableAllProduct


  
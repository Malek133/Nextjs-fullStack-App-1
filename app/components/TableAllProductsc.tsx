

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
import { IProduct } from "@/interface";




  interface TableProductProps {
    products: IProduct[];
  }
  
  
    const TableAllProduct: React.FC<TableProductProps> = (
        { products}
    ) => {
      
     
    return (
      <main className="w-full max-w-3xl mx-auto">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow> 
          <TableHead>index</TableHead>
            <TableHead>Title</TableHead>
             <TableHead>Price</TableHead>
            <TableHead>Completed</TableHead>
            
            
          </TableRow>
        </TableHeader>
        <TableBody className="mx-4">
          {products && products.map((product,i) => (
            <TableRow key={product.id}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{product.title}</TableCell>
               <TableCell>{product.price}</TableCell> 
              <TableCell>
                {product.completed ? "true" : "false"}
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


  
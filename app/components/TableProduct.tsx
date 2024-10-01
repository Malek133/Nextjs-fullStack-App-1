

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
// import { Eye } from 'lucide-react';
import ProductActions from "./ProductActions";

  interface TableProductProps {
    products: IProduct[];
  }
  
  
    const TableProduct: React.FC<TableProductProps> = ({ products }) => {

     
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow> 
            <TableHead >ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products && products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.completed ? "true" : "false"}</TableCell>
              <TableCell className=" flex-col justify-center items-center space-x-4">
              <ProductActions product={product} />
              {/* <Button  ><Eye size={16} /></Button> */}
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
    )
  }

  export default TableProduct
  
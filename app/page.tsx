import { Button } from "@/components/ui/button";
import { FolderPlus } from 'lucide-react';
import {
  Dialog,DialogContent,DialogDescription,
  DialogFooter,DialogHeader,DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getProductActions } from "@/actions/todoActions";


export default async function  Home() {
  const products = await getProductActions()
  return (
   <main>

   
    
     <div 
     className="flex justify-between items-center p-8 pb-4 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    > 
      
      
        <Dialog>
      <DialogTrigger asChild>
         <Button><FolderPlus className="mx-2" /> New Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Todo</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when your done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

   

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

import { Button } from "@/components/ui/button";
import { FolderPlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Home() {
  return (
    <div 
     className="flex justify-between items-center p-8 pb-4 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
       Alphazero
      
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
  );
}

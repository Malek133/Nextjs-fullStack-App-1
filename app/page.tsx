'use client'
import { Button } from "@/components/ui/button";
import { FolderPlus } from 'lucide-react';
import {
  Dialog,DialogContent,DialogDescription,
  DialogFooter,DialogHeader,DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
// import { getProductActions } from "@/actions/todoActions";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const productFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  
  body: z
  .string()
  .max(100, {
    message: "Username must not be longer than 30 characters.",
  }).optional(),
})

type ProductFormValues = z.infer<typeof productFormSchema>


export default  function  Home() {
  // const products = await getProductActions();

    // This can come from your database or API.
const defaultValues: Partial<ProductFormValues> = {
  title:"DEFAULT TITLE",
  body: "DEFAULT BODY",
}

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
    mode: "onChange",
  })



const onSubmit = () =>{}

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
        <div className=" py-4">
           
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
         
        </div>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

   

    </div> 
     {/* <div className="grid grid-cols-8 gap-4 mx-5">
      {products && products.map(product => (
       <li key={product.id}>
      {product.title}
       </li>
       ))}
      </div> */}
    </main>
   
  );
}

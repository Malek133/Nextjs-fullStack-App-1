'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,DialogContent,DialogDescription,
  DialogFooter,DialogHeader,DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
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

  import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { productFormSchema, ProductFormValues } from "@/schema";
import { Pencil } from 'lucide-react';
import { useState } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import Spinner from "@/components/ui/Spinner";
import { IProduct } from "@/interface";
import { updateProductActions } from "@/actions/productActions";




const EditProductForm = ({product}:{product:IProduct}) => {

  const [loading,setLoading]= useState(false);
  const [open,setOpen]= useState(false)

        // This can come from your database or API.
const defaultValues: Partial<ProductFormValues> = {
    title:product.title,
    body:product.body as string,
    completed:product.completed
  }
  

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues,
        mode: "onChange",
      })

      const onSubmit = async (data: ProductFormValues) => {
        setLoading(true);
    
        await updateProductActions({
            id: product.id as string, // Assurez-vous que product.id est bien une chaîne
            title: data.title,
            body: data.body as string,
            completed: data.completed,
            image: product.image, // Ajoutez les propriétés manquantes
            price: product.price,  // Ajoutez les propriétés manquantes
        });
    
        setLoading(false);
        setOpen(false);
    };
    

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
         <Button className="bg-green-600 text-white 
              hover:text-black hover:bg-slate-50">
               <Pencil size={16} />
         </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update a Product</DialogTitle>
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

<FormField
  control={form.control}
  name="completed"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Completed</FormLabel>
      <FormControl>
        <Checkbox
          checked={field.value} // `checked` utilise le booléen de `field.value`
          onCheckedChange={field.onChange} // `onCheckedChange` gère le changement
          id="terms"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

       
      <DialogFooter>
          <Button type="submit">
            {loading ? <Spinner /> : 'Editing'}
            </Button>
        </DialogFooter>

      </form>
    </Form>
         
        </div>

        
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default EditProductForm
'use client'

import { Button } from "@/components/ui/button";
import { FolderPlus } from 'lucide-react';
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
import { createProductActions } from "@/actions/productActions";
import { Checkbox } from "./checkbox";
import { useState } from "react";
import Spinner from "./Spinner";



const AddProductForm = ({userId}:{userId:string | null}) => {

  const [loading,setLoading]= useState(false);
  const [open,setOpen]= useState(false)

        // This can come from your database or API.
const defaultValues: Partial<ProductFormValues> = {
    title:"",
    body: "",
      //  price:0,
    completed:false
  }
  

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues,
        mode: "onChange",
      })

    const onSubmit = async ({title,body,completed}:ProductFormValues) =>{
               setLoading(true)
        await createProductActions(
            {title,body,completed,userId})
                setLoading(false)
                form.reset();  // Réinitialiser le formulaire
                setOpen(false)
    }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
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

<FormField
  control={form.control}
  name="completed"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Completed</FormLabel>
      <FormControl>
     
      <Checkbox
          checked={field.value} // Utilisez `checked` au lieu de `value`
          onCheckedChange={(checked) => field.onChange(checked)} // Mettez à jour `onChange` correctement
        /> 

           
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

       
      <DialogFooter>
          <Button type="submit">
            {loading ? <Spinner /> : 'Save'}
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

export default AddProductForm

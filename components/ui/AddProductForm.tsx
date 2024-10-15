
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FolderPlus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  // DialogHeader,
  DialogTitle,
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
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { productFormSchema, ProductFormValues } from "@/schema"
import { createProductActions } from "@/actions/productActions"
import { Checkbox } from "./checkbox"
import Spinner from "./Spinner"
import UploadButtonComponent from "@/app/components/UploadButton"


export default function AddProductForm({ userId }: { userId: string | null }) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  const defaultValues: Partial<ProductFormValues> = {
    title: "",
    body: "",
    price: 0,
    image: "",
    completed: false
  }

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const onSubmit = async ({title, body, price, completed}: ProductFormValues) => {
    setLoading(true)
    await createProductActions({
      title,
      body,
      completed,
      price,
      image: imageUrl,
      userId
    })
    setLoading(false)
    form.reset()
    setImageUrl("")
    setOpen(false)
  }

  const handleUploadComplete = (url: string) => {
    setImageUrl(url)
    form.setValue("image", url)
  }

  return (
   <div>
    <Dialog open={open} onOpenChange={setOpen}>
  {/* Déclencheur du dialogue, ici le bouton pour ajouter une nouvelle tâche ("New Todo") */}
  <DialogTrigger asChild>
    <Button>
      <FolderPlus className="mx-2" /> New Todo
    </Button>
  </DialogTrigger>

  {/* Contenu de la boîte de dialogue */}
  <DialogContent className="sm:max-w-[425px]">
    {/* En-tête du dialogue avec le titre et la description */}
    {/* <DialogHeader> */}
      <DialogTitle>Add new Todo</DialogTitle>
      
    {/* </DialogHeader> */}

    <div className="py-4">
      {/* Formulaire utilisant un hook pour la gestion de formulaire */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Champ pour le titre */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title of your todo" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the title for your new todo item.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Champ pour la description */}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your task"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can provide more details about your task here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Champ pour télécharger une image */}
            
          <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <div>
                          <UploadButtonComponent onUploadComplete={handleUploadComplete} />
                          {/* {imageUrl && 
                          <img src={imageUrl} alt="Product" 
                          className="mt-2 max-w-full h-auto" />} */}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

          {/* Champ pour le prix */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox pour marquer la tâche comme complétée */}
          <FormField
            control={form.control}
            name="completed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Completed</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pied du dialogue avec le bouton pour soumettre le formulaire */}
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


import { Button } from "@/components/ui/button";
// import Image from "next/image";
import {
  Dialog, DialogContent,
  DialogFooter, DialogHeader, DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form, FormControl, FormField, 
  FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productFormSchema, ProductFormValues } from "@/schema";
import { Pencil } from 'lucide-react';
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";
import { IProduct } from "@/interface";
import { updateProductActions } from "@/actions/productActions";
import UploadButtonComponent from "@/app/components/UploadButton";

const EditProductForm = ({ product }: { product: IProduct }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(product.image || "");

  const defaultValues: Partial<ProductFormValues> = {
    title: product.title,
    body: product.body as string,
    price: product.price,
    image: product.image as string,
    completed: product.completed,
  };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: ProductFormValues) => {
    setLoading(true);

    await updateProductActions({
      id: product.id,
      title: data.title,
      body: data.body as string,
      price: data.price,
      image: imageUrl, // Utiliser l'URL de l'image téléchargée
      completed: data.completed,
    });

    setLoading(false);
    setOpen(false);
  };

  const handleUploadComplete = (url: string) => {
    setImageUrl(url);
    form.setValue("image", url);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-600 text-white hover:text-black hover:bg-slate-50">
            <Pencil size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[555px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
           
          </DialogHeader>
          <div className="py-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Product title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about your product"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
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

                {/* Image Upload */}
                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <div>
                          <UploadButtonComponent 
                          onUploadComplete={handleUploadComplete} />
                          {/* {imageUrl && <Image src={imageUrl} 
                          alt="Product"
                          width={150}
                          height={50} 
                          className="flex justify-center mt-2" />} */}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="completed"
                  render={({ field }) => (
                    <FormItem className="flex justify-start items-center space-x-2">
                      <FormLabel>Completed</FormLabel>
                      <FormControl>
                        <Input
                          type="checkbox"
                          checked={field.value || false}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <Spinner />
                        <span className="mx-2">Saving...</span>
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProductForm;


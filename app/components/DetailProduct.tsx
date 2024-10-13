"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { IProduct } from '@/interface';
import { addToCart } from "../store/cartSlice";
import { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'

interface TableProductProps {
  products: IProduct[];
  
}

const DetailProduct: React.FC<TableProductProps> = ({ products}) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({
      id:product.id,
      title: product.title,
      price: product.price,
      image:product.image,
      quantity: 1
    }))
  }

  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((product) => (
          <Card key={product.id} className="w-[400px] h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-full w-full">
                {typeof product.image === 'string' && product.image ? (
                  <Image
                    width={500}
                    height={400}
                    src={product.image}
                    alt={product.title}
                    className="object-cover"
                  />
                ) : (
                  <span>No image</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between items-center my-4 mx-2">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <span className="text-lg font-bold text-green-600">
                  $ {product.price}
                </span>
              </div>
              <p className="text-lg text-gray-500 my-4 mx-2 py-2">
                {product.body}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button onClick={() => handleAddToCart(product)} className="w-full py-6">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </>
  );
}

export default DetailProduct;
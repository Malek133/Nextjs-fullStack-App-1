// "use client";

// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// import { IProduct } from '@/interface';
// import { addToCart } from "../store/cartSlice";
// import { AppDispatch } from '../store/store'
// import { useDispatch } from 'react-redux'

// interface TableProductProps {
//   products: IProduct[];
  
// }

// const DetailProduct: React.FC<TableProductProps> = ({ products}) => {
//   const dispatch = useDispatch<AppDispatch>()

//   const handleAddToCart = (product: IProduct) => {
//     dispatch(addToCart({
//       id:product.id,
//       title: product.title,
//       price: product.price,
//       image:product.image,
//       quantity: 1
//     }))
//   }

//   return (
//     <>
//       <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products && products.map((product) => (
//           <Card key={product.id} className="w-[400px] h-full overflow-hidden">
//             <CardHeader className="p-0">
//               <div className="relative h-full w-full">
//                 {typeof product.image === 'string' && product.image ? (
//                   <Image
//                     width={500}
//                     height={400}
//                     src={product.image}
//                     alt={product.title}
//                     className="object-cover"
//                   />
//                 ) : (
//                   <span>No image</span>
//                 )}
//               </div>
//             </CardHeader>
//             <CardContent className="p-4">
//               <div className="flex justify-between items-center my-4 mx-2">
//                 <h2 className="text-xl font-semibold">{product.title}</h2>
//                 <span className="text-lg font-bold text-green-600">
//                   $ {product.price}
//                 </span>
//               </div>
//               <p className="text-lg text-gray-500 my-4 mx-2 py-2">
//                 {product.body}
//               </p>
//             </CardContent>
//             <CardFooter className="p-4 pt-0">
//               <Button onClick={() => handleAddToCart(product)} className="w-full py-6">
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </main>
//     </>
//   );
// }

// export default DetailProduct;

"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

import { IProduct } from '@/interface';
import { addToCart } from "../store/cartSlice";
import { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'

interface TableProductProps {
  products: IProduct[];
}

export default function DetailProduct({ products }: TableProductProps) {
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToCart = (product: IProduct) => {
  
    if (product.id) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image || null,
      }))
    } else {
      console.error('Product ID is missing:', product)
    }
    
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-semibold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products && products.map((product) => (
          <Card key={product.id} className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="relative aspect-square overflow-hidden">
                {typeof product.image === 'string' && product.image ? (
                  <Image
                    fill
                    src={product.image}
                    alt={product.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{product.title}</h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(4.5)</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {product.body}
              </p>
              <div className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button onClick={() => handleAddToCart(product)} className="w-full py-6 transition-colors duration-300" variant="outline">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}


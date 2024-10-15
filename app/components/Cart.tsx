

"use client";

import { useSelector, useDispatch } from 'react-redux'
import { selectCart, removeFromCart } from '../store/cartSlice'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { RootState } from '../store/store'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2,ShoppingBag } from "lucide-react";
import Link from 'next/link';

export default function Cart() {
  const cart = useSelector((state: RootState) => selectCart(state))
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id:string | null) => {
    // dispatch(removeFromCart(id))
    if (id !== null) {
      dispatch(removeFromCart(id))
    } else {
      console.error('Cannot remove item with null id')
    }
  }

  const cartItems = cart?.items || []

  // return (
  //   <div>
  //     <h2>Panier</h2>
  //     {cartItems.length === 0 ? (
  //       <p>Votre panier est vide</p>
  //     ) : (
  //       <ul>
  //         {cartItems.map((item) => (
  //           <li key={item.id}>
  //             {item.image && (
  //               <Image src={item.image} alt={item.title} width={50} height={50} />
  //             )}
  //             <span>{item.title}</span>
  //             <span>Quantité: {item.quantity}</span>
  //             <span>Prix: ${item.price * item.quantity}</span>
  //             <Button onClick={() => handleRemoveFromCart(item.id)}>Supprimer</Button>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //     <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
  //   </div>
  // )

    return (
    <Card className="w-full max-w-2xl mx-auto my-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Panier</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Votre panier est vide</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    {typeof item.image === 'string' && item.image ? (
                      <Image
                        fill
                        src={item.image}
                        alt={item.title}
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button 
                      onClick={() => handleRemoveFromCart(item.id)} 
                      variant="ghost"
                      size="sm"
                      className="mt-1 bg-red-500"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
                <Separator className="my-4" />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      {cartItems.length > 0 && (
        <>
          <CardFooter className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total</p>
            <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            {/* <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p> */}
          </CardFooter>
          <CardFooter className="pt-4">
            <Link href="/checkout" className="w-full">
              <Button className="w-full" size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Passer à la commande
              </Button>
            </Link>
          </CardFooter>
        </>
      )}
      
    </Card>
  )
}
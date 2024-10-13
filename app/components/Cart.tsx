

"use client";

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { removeFromCart } from '../store/cartSlice'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Trash2,ShoppingBag } from "lucide-react";
import Link from 'next/link';

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch<AppDispatch>()

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

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
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
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
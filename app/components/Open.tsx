'use client'

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux'
import { selectCart } from "../store/cartSlice";
import Cart from "./Cart";

export function SheetDemo() {

    const cart = useSelector(selectCart) 

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <ShoppingCart /> <span>({cart?.items?.length || 0})</span>
            </Button>
      </SheetTrigger>
      <SheetContent>
        <Cart />
      </SheetContent>
    </Sheet>
  )
}
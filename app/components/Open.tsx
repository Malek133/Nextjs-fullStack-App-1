'use client'

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Cart from "./Cart"
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux'
import { selectCart } from "../store/cartSlice";

export function SheetDemo() {

    const {items} = useSelector(selectCart) 

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <ShoppingCart /> <span>({items.length})</span>
            </Button>
      </SheetTrigger>
      <SheetContent>
        <Cart />
      </SheetContent>
    </Sheet>
  )
}
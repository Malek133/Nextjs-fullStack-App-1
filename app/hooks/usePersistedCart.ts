import { useState, useEffect } from 'react'
import { CartItem } from '../store/cartSlice'

export function usePersistedCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cartt')
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('cartt', JSON.stringify(cart))
  }, [cart])

  return [cart, setCart] as const
}
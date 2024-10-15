

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface CartItem {
  id:string | null
  title: string
  price: number
  image: string | null
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const loadCartFromLocalStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart.items)) {
          return parsedCart
        }
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error)
      }
    }
  }
  return { items: [] }
}

const saveCartToLocalStorage = (cart: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify({ items: cart }))
  }
}

const initialState: CartState = loadCartFromLocalStorage()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) => {
      if (!Array.isArray(state.items)) {
        state.items = []
      }
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      saveCartToLocalStorage(state.items)
    },
    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   if (Array.isArray(state.items)) {
    //     state.items = state.items.filter(item => item.id !== action.payload)
    //     saveCartToLocalStorage(state.items)
    //   }
    // },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    // You can add other actions here if necessary
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const selectCart = (state: RootState): CartState => state.cart

export default cartSlice.reducer



import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface CartItem {
  id: number
  title: string
  price: number
  image:string | null
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    // Vous pouvez également ajouter d'autres actions ici si nécessaire
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const selectCart = (state: RootState): CartState => state.cart;

export default cartSlice.reducer
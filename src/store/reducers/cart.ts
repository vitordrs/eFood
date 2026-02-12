import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Produto } from "../../components/ProductCards";

type CartState = {
  items: Produto[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, close, open } = cartSlice.actions
export default cartSlice.reducer
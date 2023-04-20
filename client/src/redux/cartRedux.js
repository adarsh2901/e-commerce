import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //cart quantity number
      state.products.push(action.payload); //payload is the new product
      state.total += action.payload.price * action.payload.quantity; //particular item quantity
    },
    clearCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishList";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cart: [], amount: 0 },
  reducers: {
    addGameToCart(state, action) {
      state.cart.push(action.payload);
      state.amount += action.payload.price;
    },
    removeGameFromCart(state, action) {
      const index = state.cart.findIndex((game) => game.id === action.payload);
      state.amount -= state.cart[index].price;
      state.cart.splice(index, 1);
    },
    clearCart(state) {
      state.cart = [];
      state.amount = 0;
    },
    getStatusOfGame(state, action) {
      const index = state.cart.find((game) => game.id === action.payload);
      console.log(index);
      state.statusOfGame = index === -1 ? false : true;
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: { cartReducer : cartSlice.reducer, wishReducer: wishListSlice.reducer }
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
         toast.success("increseProduct quantity", {
          position: "bottom-right",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.info(`${action.payload.title}add  quantity`, {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return state;
    },
    removCart(state, action) {
      const removeItem = state.cartItems.filter(
        (items) => items.id !== action.payload.id
      );
      state.cartItems = removeItem;
      toast.info(`${action.payload.title}remove`, {
        position: "bottom-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.warning(`${action.payload.title}remove`, {
          position: "bottom-right",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removeItem = state.cartItems.filter(
          (items) => items.id !== action.payload.id
        );
        state.cartItems = removeItem;
        toast.info(`${action.payload.title}remove`, {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal: (state, action) => {
      console.log(" state.cartItems", state.cartItems);
      let q = 0,
        t = 0;
      state.cartItems.forEach((element) => {
        // q += element?.cartQuantity;
        t += element?.price * element?.cartQuantity;
      });
      state.cartTotalQuantity = state.cartItems.length;
      state.cartTotalAmount = t;
      return state;
    },
  },
});

export const { addToCart, removCart, decreaseCart, clearCart, getTotal } =
  CartSlice.actions;

export default CartSlice.reducer;

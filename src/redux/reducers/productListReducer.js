import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiProducts } from "../../config";

const initialState = {
  product: [],
  isLoading: true,
  isError: null,
  status: "",
};

export const fetchProducts = createAsyncThunk(
  "product/productList",
  async (id = null, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(apiProducts);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("data Not FOund");
    }
  }
);

const productSlices = createSlice({
  name: "productsList",
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.status = "success";
      state.isError = null;
    },
    [fetchProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.status = "";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.payload;
      state.status = "bad req";
    },
  },
});

export default productSlices.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BaseResponse } from "../../shared/Api/Abstract/BaseResponse";

export interface ProductCategory {
  Id: string;
  Name: string;
  IsActive: boolean;
}
export interface Product {
  Id: string;
  Title: string;
  Subtitle: string;
  ListPrice: string;
  Price: string;
  Barcode: string;
  IsActive: boolean;
  ProductCategory: ProductCategory;
}
export interface ProductState {
  loading: boolean;
  products: Array<Product>;
  error: string | undefined;
}
const initialState: ProductState = {
  loading: false,
  products: [],
  error: undefined,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  const res = fetch(
    "https://api-dev.wsrlife.com/api/product?skip=0&take=1000"
  ).then((data) => data.json());

  return res;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<BaseResponse<Array<Product>>>) => {
        state.loading = false;
        state.products = action.payload.Value;
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});
export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

const initialState: Array<Product> = [
  {
    Id: "1",
    Title: "Product1",
    Subtitle: "Product1",
    ListPrice: "100",
    Price: "100",
    Barcode: "123456789",
    IsActive: true,
    ProductCategory: {
      Id: "1",
      Name: "Category1",
      IsActive: true,
    },
  },
];
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});
export const { addProduct } = productSlice.actions;
export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;

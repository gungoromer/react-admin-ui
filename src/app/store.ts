import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/ProductSlice";
import productCategoryReducer from "../pages/productcategory/ProductCategorySlice";
export const store = configureStore({
  reducer: {
    productReducer,
    productCategoryReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

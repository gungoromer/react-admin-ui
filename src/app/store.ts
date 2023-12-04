import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/ProductSlice";
export const store = configureStore({
  reducer: {
    productReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

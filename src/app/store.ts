import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/products/ProductSlice";
export const store = configureStore({
  reducer: {
    productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

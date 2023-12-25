import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BaseResponse } from "../../shared/Api/Abstract/Response/BaseResponse";
import ProductCategory from "../productcategory/ProductCategory";
import ProductCategoryApi from "../../shared/Api/ProductCategory/ProductCategoryApi";
import { BaseGetManyRequest } from "../../shared/Api/Abstract/Request/BaseGetManyRequest";

export interface ProductCategory {
  Id: string;
  Name: string;
  IsActive: boolean;
}

export interface ProductCategoryState {
  loading: boolean;
  productCategoryList: Array<ProductCategory>;
  error: string | undefined;
}
const initialState: ProductCategoryState = {
  loading: false,
  productCategoryList: [],
  error: undefined,
};

export const fetchProductCategoryList = createAsyncThunk(
  "productcategory/fetchProductCategoryList",
  async (getManyRequest: BaseGetManyRequest) => {
    const repository: ProductCategoryApi = new ProductCategoryApi();

    const res = await repository.getMany<ProductCategory>(
      getManyRequest.skip,
      getManyRequest.take
    );

    return res;
  }
);

export const productCategorySlice = createSlice({
  name: "productcategorylist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductCategoryList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProductCategoryList.fulfilled,
      (state, action: PayloadAction<BaseResponse<Array<ProductCategory>>>) => {
        state.loading = false;
        state.productCategoryList = action.payload.Value;
      }
    );
    builder.addCase(fetchProductCategoryList.rejected, (state, action) => {
      state.loading = false;
      state.productCategoryList = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});
export const productCategorySelector = (state: RootState) =>
  state.productCategoryReducer;
export default productCategorySlice.reducer;

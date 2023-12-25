import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./ProductCategory.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import {
  ProductCategory,
  fetchProductCategoryList,
  productCategorySelector,
} from "./ProductCategorySlice";
import { BaseGetManyRequest } from "../../shared/Api/Abstract/Request/BaseGetManyRequest";

const columns: GridColDef[] = [
  { field: "Id", headerName: "Id", width: 90 },
  {
    field: "Name",
    type: "string",
    headerName: "Name",
    width: 250,
  },
  {
    field: "Description",
    type: "string",
    headerName: "Description",
    width: 250,
  },
  {
    field: "IsActive",
    headerName: "IsActive",
    width: 150,
    type: "boolean",
  },
];

const ProductCategoryList = () => {
  const [open, setOpen] = useState(false);

  const [productcategorylist, setProductCategoryList] = useState<
    Array<ProductCategory>
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedProductCategoryList = useAppSelector(productCategorySelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(selectedProductCategoryList.loading);
    setError(selectedProductCategoryList.error);
    setProductCategoryList(selectedProductCategoryList.productCategoryList);
  }, [selectedProductCategoryList]);

  //this function for fetch data from api when page load
  useEffect(() => {
    dispatch(fetchProductCategoryList(new BaseGetManyRequest(0, 1000)));
  }, []);

  return (
    <div className="productcategorylist">
      <div className="info">
        <h1>Product Category List</h1>
        <button onClick={() => setOpen(true)}>Add New Product Category</button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <DataTable
        slug="productcategorylist"
        columns={columns}
        rows={productcategorylist}
        IsExistActionColumns={true}
      />

      {open && (
        <Add slug="productcategory" columns={columns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default ProductCategoryList;

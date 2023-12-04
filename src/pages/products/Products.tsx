import { useEffect, useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Product, productSelector } from "./ProductSlice";

const columns: GridColDef[] = [
  { field: "Id", headerName: "Id", width: 90 },
  {
    field: "Title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "Subtitle",
    type: "string",
    headerName: "Subtitle",
    width: 150,
  },
  {
    field: "ListPrice",
    type: "string",
    headerName: "ListPrice",
    width: 200,
  },
  {
    field: "Price",
    headerName: "Price",
    type: "string",
    width: 200,
  },
  {
    field: "ProductCategory.Name",
    headerName: "Product Category",
    width: 200,
    type: "string",
  },
  {
    field: "Barcode",
    headerName: "Barcode",
    width: 200,
    type: "string",
  },
  {
    field: "IsActive",
    headerName: "IsActive",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Array<Product>>([]);
  const selectedProducts = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setProducts(selectedProducts);
    return () => {
      console.log("component unmounting...");
    };
  }, [selectedProducts]);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>

      <DataTable slug="products" columns={columns} rows={products} />

      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;

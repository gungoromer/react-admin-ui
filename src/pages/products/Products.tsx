import { useEffect, useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Product, fetchProducts, productSelector } from "./ProductSlice";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedProducts = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLoading(selectedProducts.loading);
    setError(selectedProducts.error);
    setProducts(selectedProducts.products);
  }, [selectedProducts]);
  function handleFetchProduct() {
    dispatch(fetchProducts());
  }

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products?.map((product) => (
        <li key={product.Id}>
          {product.Id} | {product.Title} | {product.Price}
        </li>
      ))}
      <button className="btn" onClick={handleFetchProduct}>
        Fetch
      </button>

      {/* <DataTable slug="products" columns={columns} rows={products} /> */}

      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;

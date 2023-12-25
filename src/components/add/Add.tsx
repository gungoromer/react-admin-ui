import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ProductCategoryApi from "../../shared/Api/ProductCategory/ProductCategoryApi";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // TEST THE API

  //const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     var productCateogryApi = new ProductCategoryApi();
  //     return productCateogryApi.create({
  //       Name: "test",
  //       IsActive: true,
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);
    //add new item
    //mutation.mutate();
    //props.setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) =>
              column.type === "boolean" ? (
                <div className="item">
                  <label>{column.headerName}</label>
                  <input
                    key={column.field}
                    type="checkbox"
                    placeholder={column.field}
                  />
                </div>
              ) : column.type === "number" ? (
                <div className="item">
                  <label>{column.headerName}</label>
                  <input
                    key={column.field}
                    type="number"
                    placeholder={column.field}
                  />
                </div>
              ) : (
                <div className="item">
                  <label>{column.headerName}</label>
                  <input
                    key={column.field}
                    type="text"
                    placeholder={column.field}
                  />
                </div>
              )
            )}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;

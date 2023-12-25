import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false);
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

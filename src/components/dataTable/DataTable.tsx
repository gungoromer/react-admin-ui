import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  IsExistActionColumns?: boolean;
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //delete the item
  };

  let actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.Id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  if (props.IsExistActionColumns === false) {
    actionColumn = [];
  }

  return (
    <div className="dataTable">
      <DataGrid
        getRowId={(row) => row.Id}
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 50, 100]}
        checkboxSelection={false}
        disableRowSelectionOnClick={true}
        disableColumnFilter={false}
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;

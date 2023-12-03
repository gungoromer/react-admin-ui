import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import UserRepository from "../../shared/Api/User/UserRepository";
import { IUserGetResponse } from "../../shared/Api/User/Response/IUserGetResponse";
import { BaseResponse } from "../../shared/Api/Abstract/BaseResponse";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "SmallProfileImageUrl",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img src={params.row.SmallProfileImageUrl || "/noavatar.png"} alt="" />
      );
    },
  },
  {
    field: "Name",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "Surname",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "Email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "PhoneNumber",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "IsActive",
    headerName: "IsActive",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const repository: UserRepository = new UserRepository();

  const result = repository
    .getMany<IUserGetResponse>()
    .then((response: BaseResponse<IUserGetResponse[]>) => {
      console.log("users page then");
      console.log(response);
      setData(response.Value);
    });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      <DataTable slug="user" columns={columns} rows={data} />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;

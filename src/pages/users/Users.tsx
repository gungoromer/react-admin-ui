import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import UserRepository from "../../shared/Api/User/UserApi";
import { IUserGetResponse } from "../../shared/Api/User/Response/IUserGetResponse";
import { BaseResponse } from "../../shared/Api/Abstract/Response/BaseResponse";

const columns: GridColDef[] = [
  { field: "Id", headerName: "ID", width: 90 },
  {
    field: "SmallProfileImageUrl",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        // <img src={params.row.SmallProfileImageUrl || "/noavatar.png"} alt="" />
        <img src="/noavatar.png" alt={params.row.SmallProfileImageUrl} />
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

  useEffect(() => {
    repository
      .getMany<IUserGetResponse>(0, 1000)
      .then((response: BaseResponse<IUserGetResponse[]>) => {
        if (response.Status == 1) {
          setData(response.Value ?? []);
        }
      });
  }, []);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      <DataTable
        slug="user"
        columns={columns}
        rows={data}
        IsExistActionColumns={false}
      />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;

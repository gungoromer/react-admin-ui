import { Outlet } from "react-router-dom";
import "./AnonymousLayout.scss";

const AnonymousLayout = () => {
  return (
    <div className="anonymousLayout">
      <Outlet />
    </div>
  );
};

export default AnonymousLayout;

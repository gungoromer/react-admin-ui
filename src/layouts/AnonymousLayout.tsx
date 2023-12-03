import { Outlet } from "react-router-dom";

const AnonymousLayout = () => {
  return (
    <div className="anonymousLayout">
      <Outlet />
    </div>
  );
};

export default AnonymousLayout;

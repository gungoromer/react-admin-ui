import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const isLogged = token ? true : false;

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          asd
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar></Navbar>
        <div className="container">
          <div className="menuContainer">
            <Menu></Menu>
          </div>
          <div className="contentContainer">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/users",
          element: <Users></Users>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Header from "../Components/Header";
import Activate from "../Pages/Home/activate";
import ResetPassword from "../Pages/ResetPassword";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/activate/:token",
        element: <Activate />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

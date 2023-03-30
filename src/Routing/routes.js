import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Header from "../Components/Header";

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

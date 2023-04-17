import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
/**
 * import the createBrowserRouter and RouterProvider from react-router-dom
 * createBrowserRouter digunakan untuk membuat router
 * RouterProvider digunakan untuk menyediakan router ke aplikasi
 * outlet digunakan untuk menampilkan halaman yang sesuai dengan path
 */
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/**
 * layout component digunakan untuk menampilkan navbar dan footer di setiap halaman
 */
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

/**
 * path: digunakan untuk menentukan path yang akan di render
 * element: digunakan untuk menentukan component yang akan di render
 * children: digunakan untuk menentukan children dari path
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/mygigs",
        element: <MyGigs />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

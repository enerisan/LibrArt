import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import LicencePage from "./pages/LicencePage/LicencePage";
import ContactPage from "./pages/Contact/ContactPage";
import CGUPage from "./pages/CGUPage/CGUPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/licence",
        element: <LicencePage />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: "/cgu",
        element: <CGUPage />,
      },

      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/painting/${params.id}`),
      },

      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

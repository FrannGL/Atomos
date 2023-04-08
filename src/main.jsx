// REACT & REACT-ROUTER-DOM
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// COMPONENTES MATERIAL-UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// RUTAS
import Inicio from "./routes/Inicio";
import Productos from "./routes/Productos";
import Categorias from "./routes/Categorias";
import Descripcion from "./routes/Descripcion";
import PageError from "./routes/Page-Error";
import Reservas from "./routes/Reservas";
import Nosotros from "./routes/Nosotros";
import Carrito from "./routes/Carrito";
import Checkout from "./routes/Checkout";

// LAYOUT
import Layout from "./layout";

// CONTEXT GENERAL
import CustomProvider from "./Context/index";

// CONTEXT THEME
import ThemeContextProvider from "./ThemeContextProvider/index";

// FIREBASE
import { initializeApp } from "firebase/app";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageError />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/products",
        element: <Productos />,
      },
      {
        path: "/category/:id",
        element: <Categorias />,
      },
      {
        path: "/descripcion/:id",
        element: <Descripcion />,
      },
      {
        path: "/reservas",
        element: <Reservas />,
      },
      {
        path: "/sucursales",
        element: "",
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/cart",
        element: <Carrito />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CustomProvider>
        <RouterProvider router={router} />
      </CustomProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

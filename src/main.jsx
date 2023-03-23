// REACT & REACT-ROUTER-DOM
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// COMPONENTES MATERIAL-UI
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
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

// CONTEXT
import Layout from "./layout";

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
        element: <div>Hello world!</div>,
      },
      {
        path: "/checkout",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#040b16",
    },
    secondary: {
      main: "#580b7d",
    },
    base: {
      main: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

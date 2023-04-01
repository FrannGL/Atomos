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
import Carrito from "./routes/Carrito";
import Checkout from "./routes/Checkout";

// LAYOUT
import Layout from "./layout";

// CONTEXT
import CustomProvider from "./Context/index";

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

const firebaseConfig = {
  apiKey: "AIzaSyBd9_BcdIN3ZbOQynCPcLkVCgahb7JrHX0",
  authDomain: "juguetes-perdidos.firebaseapp.com",
  projectId: "juguetes-perdidos",
  storageBucket: "juguetes-perdidos.appspot.com",
  messagingSenderId: "448426853768",
  appId: "1:448426853768:web:158795965e51db6419e63d",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CustomProvider>
  </React.StrictMode>
);

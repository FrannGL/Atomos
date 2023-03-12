import React from "react";
import ReactDOM from "react-dom/client";
import Categoria from "./routes/Categoria";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Catalogo from "./routes/Catalogo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Categoria />,
  },
  {
    path: "/category/:id",
    element: <Categoria />,
  },
  {
    path: "/catalogo/:id",
    element: <Catalogo />,
  },
  {
    path: "/cart",
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
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

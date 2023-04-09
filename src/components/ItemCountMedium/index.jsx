import {
  Alert,
  Box,
  Button,
  CardActions,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";
import { ThemeContext } from "../../ThemeContextProvider";

export default function ItemCountMedium({ product }) {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(Context);

  const { isDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {isDarkMode ? (
        <CardActions
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1.3,
          }}
        >
          {/* -------- ITEM COUNT -------------- */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "35%",
              color: "white",
            }}
          >
            <Box
              sx={{
                border: 1,
                backgroundColor: "white",
                height: "auto",
              }}
            >
              <IconButton
                color="black"
                disabled={count === 1}
                sx={{ padding: 0, color: "black" }}
                onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "60%",
                border: 1,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {count}
              </Typography>
            </Box>
            <Box
              sx={{
                border: 1,
                backgroundColor: "white",
                height: "auto",
              }}
            >
              <IconButton
                color="black"
                sx={{ padding: 0, color: "black" }}
                onClick={() => setCount(count + 1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          {/* ------- AGREGAR AL CARRITO ---------- */}
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={() => {
              addToCart(product, count);
              handleClick();
            }}
          >
            Agregar al carrito
          </Button>
          {/* --------- VER MÁS ------------- */}
          <Button size="small" variant="outlined" color="base">
            <NavLink
              to={`/descripcion/${product?.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Ver Más
            </NavLink>
          </Button>
          {/* ---------- ALERTA ------------- */}
          <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Producto Agregado al Carrito
            </Alert>
          </Snackbar>
        </CardActions>
      ) : (
        <CardActions
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1.3,
          }}
        >
          {/* -------- ITEM COUNT -------------- */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "35%",
              color: "#000",
            }}
          >
            <Box
              sx={{
                border: 1,
                backgroundColor: "#040b16",
                height: "auto",
              }}
            >
              <IconButton
                disabled={count === 1}
                sx={{ padding: 0, color: "#fff" }}
                onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "60%",
                border: 1,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {count}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#040b16",
                height: "auto",
              }}
            >
              <IconButton
                color="black"
                sx={{
                  padding: 0,
                  color: "#fff",
                  height: "auto",
                }}
                onClick={() => setCount(count + 1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          {/* ------- AGREGAR AL CARRITO ---------- */}
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={() => {
              addToCart(product, count);
              handleClick();
            }}
          >
            Agregar al carrito
          </Button>
          {/* --------- VER MÁS ------------- */}
          <Button size="small" variant="outlined" color="info">
            <NavLink
              to={`/descripcion/${product?.id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              Ver Más
            </NavLink>
          </Button>
          {/* ---------- ALERTA ------------- */}
          <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Producto Agregado al Carrito
            </Alert>
          </Snackbar>
        </CardActions>
      )}
    </>
  );
}

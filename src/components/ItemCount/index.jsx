// COMPONENTES MATERIAL-UI
import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";

// ICONOS MATERIAL-UI
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// HOOKS REACT
import { useContext, useState } from "react";
import { Context } from "../../Context";

import AlertSuccess from "../AlertSuccess";
import { NavLink } from "react-router-dom";

export default function ItemCount({ onAddCart }) {
  const [count, setCount] = useState(1);
  const [productAdded, setProductAdded] = useState(false);
  const { handleClick } = useContext(Context);

  const countValidator = () => {
    if (count >= 1) {
      onAddCart(count);
      setProductAdded(true);
      <AlertSuccess />;
    }
  };

  return (
    <>
      {/* -------- CONTAINER -------- */}
      <Box
        sx={{
          width: "64%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        {!productAdded ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: 1,
                width: "45%",
              }}
            >
              <Box sx={{ border: 1, backgroundColor: "#040b16" }}>
                <IconButton color="base" onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                {count}
              </Typography>
              <Box sx={{ border: 1, backgroundColor: "#040b16" }}>
                <IconButton
                  color="base"
                  onClick={() =>
                    count > 0 ? setCount(count - 1) : setCount(0)
                  }
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            </Box>

            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {
                countValidator();
                handleClick();
              }}
            >
              Agregar al carrito
            </Button>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 5, mt: 3 }}>
            <NavLink
              to={"/products"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                size="large"
                variant="outlined"
                color="info"
                startIcon={<AddShoppingCartIcon />}
              >
                Seguir Comprando
              </Button>
            </NavLink>

            <NavLink
              to={"/cart"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                size="large"
                variant="outlined"
                color="success"
                startIcon={<CheckCircleIcon />}
              >
                Finalizar Compra
              </Button>
            </NavLink>
          </Box>
        )}
      </Box>

      {/* ----------- ALERTA ----------- */}
      <AlertSuccess />
    </>
  );
}

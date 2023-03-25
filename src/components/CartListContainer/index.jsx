import { Box, Button, Chip, Typography } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";

import CartListItem from "../CartListItem";
import CartListItemSkeleton from "../CartLisItemSkeleton";
import Footer from "../Footer";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function CartListContainer() {
  const { itemsAdded } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const getProducts = async () => {
    try {
      await fakePromise();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* --------------------- TITLE ------------------------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {itemsAdded.length >= 1 ? (
            <Typography variant="h2">CARRITO</Typography>
          ) : (
            <Typography variant="h2">TU CARRITO ESTA VACIO :(</Typography>
          )}
        </Box>

        {/* ---- RENDERIZADO DE PRODUCTOS AGREGADOS AL CARRITO ----- */}

        {loading
          ? [1, 2, 3].map((item) => <CartListItemSkeleton key={item} />)
          : itemsAdded.map((product) => (
              <CartListItem key={product.id} product={product} />
            ))}

        {/* ------------------- TOTAL DE LA COMPRA --------------- */}

        {itemsAdded.length >= 1 ? (
          <>
            {" "}
            <Box
              sx={{
                width: "85%",
                height: 40,
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Chip
                icon={<AttachMoneyIcon />}
                label="ARS: $15.240"
                variant="outlined"
                sx={{ fontSize: 25, padding: 2 }}
              />
            </Box>
            {/* ------------------ CONTROLES -----------------  */}
            <Box
              sx={{
                width: "100%",
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
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
                to={""}
                style={{ textDecoration: "none", color: "white", mt: 5 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="success"
                  startIcon={<CheckCircleIcon />}
                >
                  Finalizar Compra
                </Button>
              </NavLink>
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>

      <Footer />
    </>
  );
}

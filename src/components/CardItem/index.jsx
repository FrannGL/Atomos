// COMPONENTES MATERIAL-UI
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

// HOOKS REACT
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";

export default function CardItem({ product }) {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { addToCart } = useContext(Context);

  return (
    <Card
      sx={{
        bgcolor: "#040b16",
        minWidth: 280,
        height: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 0.8,
        borderRadius: 7,
        boxShadow: 10,
      }}
    >
      {/* ----- IMAGEN ------- */}
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image}
      />
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* ------ TITULO -------- */}
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          {product.name}
        </Typography>
        <Box
          sx={{
            width: 200,
            height: 50,
            margin: "auto",
            color: "white",
            display: "flex",
          }}
        >
          {/* ----- INFO -------- */}
          <CardMedia
            image={product.typeimage}
            sx={{
              border: 1,
              width: 60,
              height: "100%",
            }}
          ></CardMedia>
          <Box sx={{ width: "100%" }}>
            {/* ------ CATEGORIA ------- */}
            <Box
              sx={{
                width: "100%",
                height: "50%",
                border: 1,
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              {product.category}
            </Box>
            {/* ------ DETALLE PRODUCTO ------- */}
            <Box
              sx={{
                width: "100%",
                height: "50%",
                border: 1,
                textAlign: "center",
              }}
            >
              {product.ibu} - {product.abv}
            </Box>
          </Box>
        </Box>
        {/* --------- PRECIO ---------- */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            color: "#fff",
            fontSize: 25,
            mt: 1,
          }}
        >
          $ {product.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ------- AGREGAR AL CARRITO ---------- */}
        <Button
          size="small"
          variant="contained"
          color="info"
          onClick={() => {
            addToCart(product, 1);
            handleClick();
          }}
        >
          Agregar al carrito
        </Button>
        {/* --------- VER MÁS ------------- */}
        <Button size="small" variant="outlined" color="base">
          <NavLink
            to={`/descripcion/${product.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Ver Más
          </NavLink>
        </Button>
      </CardActions>
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
    </Card>
  );
}

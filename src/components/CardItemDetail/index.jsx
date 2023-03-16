import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function CardItemDetail({ product }) {
  return (
    <Card
      sx={{
        mt: 11,
        mb: 4,
        width: "90%",
        height: 400,
        display: "flex",
      }}
    >
      {/* --- CONTENEDOR IMAGEN --- */}
      <Box sx={{ width: "40%", mx: 2, my: 2 }}>
        <CardMedia
          component="img"
          sx={{ height: "100%" }}
          image={product?.image}
          title={product?.name}
        />
      </Box>

      {/* --- CONTENEDOR DETALLES --- */}
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {/* --- CONTENEDOR TITULO */}
        <Box
          sx={{
            width: "97%",
            height: "auto",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            mr: 2,
            mt: 2,
            mb: 2,
          }}
        >
          <Typography align="center" variant="h4">
            {product?.name}
          </Typography>
        </Box>

        {/* --- CONTENEDOR PRECIO --- */}
        <Box
          sx={{
            width: "97%",
            height: "auto",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            mr: 2,
            mb: 2,
          }}
        >
          <Typography align="center" variant="h4">
            $ {product?.precio}
          </Typography>
        </Box>

        {/* --- CONTENEDOR DESCRIPCION --- */}
        <Box
          sx={{
            width: "97%",
            height: "auto",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            mr: 2,
            mb: 2,
          }}
        >
          <Typography align="justify" variant="h6">
            {product?.description}
          </Typography>
        </Box>

        {/* --- CONTENEDOR CONTROLES --- */}

        <ItemCount />

        {/* --- CONTENEDOR CARRITO ---  */}
        <Box
          sx={{
            width: "97%",
            height: "auto",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 5,
            mr: 2,
            mb: 2,
          }}
        >
          <Button size="large" variant="contained" color="primary">
            Agregar al carrito
          </Button>
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
          <NavLink to={""} style={{ textDecoration: "none", color: "white" }}>
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
      </Box>
    </Card>
  );
}

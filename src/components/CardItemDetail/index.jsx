// COMPONENTES MATERIAL-UI
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

// ICONOS MATERIAL-UI
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// HOOKS REACT
import { NavLink } from "react-router-dom";

// COMPONENTES PROPIOS
import ItemCount from "../ItemCount";

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

          {/* --- CONTENEDOR DETALLES DEL PRODUCTO --- */}
          <Card
            sx={{
              width: 250,
              height: 60,
              mx: "auto",
              mt: 2,
              color: "black",
              display: "flex",
              fontSize: 20,
            }}
          >
            <CardMedia
              image={product?.typeimage}
              sx={{
                border: 1,
                width: 60,
                height: "100%",
                backgroundColor: "primary.main",
              }}
            ></CardMedia>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  border: 1,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  fontFamily: "initial",
                  fontWeight: "bold",
                }}
              >
                {product?.category}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  border: 1,
                  textAlign: "center",
                }}
              >
                {product?.ibu} - {product?.abv}
              </Box>
            </Box>
          </Card>
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
          <Typography align="justify" variant="h6" fontSize="1.1rem">
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

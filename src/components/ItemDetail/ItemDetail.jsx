import { Card, CardMedia, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Footer from "../Footer";

export default function ItemDetail({ product }) {
  console.log(product);

  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/* ---- CONTENEDOR PRINCIPAL ---- */}
        <Card
          sx={{
            my: 12,
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
              title="green iguana"
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

            {/* --- CONTENEDOR CARRITO ---  */}
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
              <Button size="large" variant="contained" color="primary">
                Agregar al carrito
              </Button>
            </Box>

            {/* --- CONTENEDOR SEGUIR COMPRA --- */}
            <Box
              sx={{
                width: "97%",
                height: "auto",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                mt: 5,
                mr: 2,
                mb: 2,
              }}
            >
              <Button size="large" variant="outlined" color="primary">
                Seguir Comprando
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

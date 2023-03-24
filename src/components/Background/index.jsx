// COMPONENTES MATERIAL-UI
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

// HOOKS REACT
import { NavLink } from "react-router-dom";

// HOJA DE ESTILOS PROPIA
import "./estilos.css";

export default function Background() {
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="wrapper"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            mb: 15,
          }}
        >
          <Typography
            variant="h1"
            style={{ fontFamily: "Oswald", color: "white", letterSpacing: 10 }}
          >
            TIENDA ONLINE
          </Typography>
          <Typography variant="h6" color="white" sx={{ letterSpacing: 5 }}>
            CALIDAD EN CERVEZAS ARTESANALES
          </Typography>
          <NavLink
            to={"/products"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button variant="contained" size="large" sx={{ mt: 5 }}>
              VER PRODUCTOS
            </Button>
          </NavLink>
        </Box>
      </Container>
    </>
  );
}

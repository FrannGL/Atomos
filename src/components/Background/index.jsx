import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { NavLink } from "react-router-dom";

import "./estilos.css";

export default function Background() {
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ width: "100%", height: "100vh" }}
        className="wrapper"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mx: "auto",
            my: "auto",
            width: "100%",
            height: "100%",
          }}
        >
          <h1>TIENDA ONLINE</h1>
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

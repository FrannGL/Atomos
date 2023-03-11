import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import logo from "../../../public/assets/images/logo-white.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavListDrawe from "../NavListDrawer";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/index";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar({}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button>
            <NavLink to={"/"}>
              <img src={logo} className="logo" />
            </NavLink>
          </Button>
          {/* --- VISTA MOBILE ---  */}
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* --- VISTA DESKTOP ---- */}

          {/* --- MENU IZQUIERDO --- */}
          <Box
            sx={{ display: { xs: "none", sm: "block" }, ml: 3, flexGrow: 1 }}
          >
            <Button color="inherit">
              <NavLink
                to={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                INICIO
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={"/category/honey"}
                style={{ textDecoration: "none", color: "white" }}
              >
                CERVEZAS RUBIAS
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={"/category/scottish"}
                style={{ textDecoration: "none", color: "white" }}
              >
                CERVEZAS ROJAS
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={"/category/black"}
                style={{ textDecoration: "none", color: "white" }}
              >
                CERVEZAS NEGRAS
              </NavLink>
            </Button>
          </Box>

          {/* --- MENU DERECHO --- */}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit">LOGIN</Button>
            <Button color="inherit">REGISTER</Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", sm: "none" } }}
      >
        <NavListDrawe setOpen={setOpen} />
      </Drawer>
    </>
  );
}

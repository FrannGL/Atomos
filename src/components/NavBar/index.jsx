import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import logo from "../../../public/assets/images/logo-white.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavListDrawe from "../NavListDrawer";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/index";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button>
            <NavLink to={"/"}>
              <img src={logo} className="logo" style={{ width: "50px" }} />
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
            {/* <Button color="inherit">
              <NavLink
                to={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                INICIO
              </NavLink>
            </Button> */}
            <Button
              color="base"
              id="basic-button"
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              CATALOGO
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/rubia"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CERVEZAS RUBIAS
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/roja"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CERVEZAS ROJAS
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/negra"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CERVEZAS NEGRAS
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to={"/category/:"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  VER TODO
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>

          {/* --- MENU DERECHO --- */}

          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit">LOGIN</Button>
            <Button color="inherit">REGISTER</Button>
          </Box> */}
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

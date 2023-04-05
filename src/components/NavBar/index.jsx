// COMPONENTES MATERIAL-UI
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Box,
} from "@mui/material";

// ICONOS MATERIAL UI
import MenuIcon from "@mui/icons-material/Menu";

// HOOKS REACT
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// COMPONENTES PROPIOS
import NavListDrawe from "../NavListDrawer";
import CartWidget from "../CartWidget/index";

// LOGO
import logo from "../../../public/assets/images/logo-white.png";
import MUIswitch from "../MUIswitch";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) setIsScrolling(true);
      else setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: isScrolling ? 50 : 80,
            transition: "all .3s ease",
          }}
        >
          <Button>
            <NavLink to={"/"}>
              <img
                src={logo}
                className="logo"
                style={{
                  width: isScrolling ? 100 : 150,
                  transition: "all .3s ease",
                }}
              />
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
            <Button
              color="base"
              id="basic-button"
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleOpen}
              sx={{
                fontSize: isScrolling ? 12 : 15,
                transition: "all .3s ease",
              }}
            >
              NUESTRAS CERVEZAS
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
                  to={"/products"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  VER TODO
                </NavLink>
              </MenuItem>
            </Menu>
            <NavLink
              to={"/reservas"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                color="base"
                sx={{
                  fontSize: isScrolling ? 12 : 15,
                  transition: "all .3s ease",
                }}
              >
                RESERVAS
              </Button>
            </NavLink>
            <NavLink
              to={"/nosotros"}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Button
                color="base"
                sx={{
                  fontSize: isScrolling ? 12 : 15,
                  transition: "all .3s ease",
                }}
              >
                NOSOTROS
              </Button>
            </NavLink>
          </Box>

          {/* --- MENU DERECHO --- */}

          <MUIswitch />
          {/* <SearchInput /> */}
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

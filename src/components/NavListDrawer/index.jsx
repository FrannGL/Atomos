// COMPONENTES MATERIAL-UI
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

// ICONOS MATERIAL-UI
import LoginIcon from "@mui/icons-material/Login";

// COMPONENTES PROPIOS
import CartWidget from "../CartWidget";

export default function NavListDrawe({ navArrayLinks, NavLink, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="PRIMERO" />
            {/* <ListItemButton onClick={() => setOpen(false)}>
            </ListItemButton> */}
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="SEGUNDO" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="TERCERO" />
          </ListItem>
          <CartWidget />
        </List>
      </nav>
    </Box>
  );
}

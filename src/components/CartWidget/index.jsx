// COMPONENTES MATERIAL-UI
import { Box, styled, Badge, IconButton } from "@mui/material";

// ICONOS MATERIAL-UI
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContext } from "react";
import { Context } from "../../Context";
import { NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: 15,
    border: "1px solid",
    fontSize: 16,
    paddingX: 10,
  },
}));

export default function CartWidget() {
  const { itemsAdded } = useContext(Context);

  return (
    <Box sx={{ mx: 3, display: { xs: "none", sm: "flex" } }}>
      <IconButton aria-label="cart">
        <NavLink to={"../../cart"}>
          <StyledBadge
            badgeContent={itemsAdded < 1 ? "0" : itemsAdded.length}
            color="info"
          >
            <LocalMallIcon color="base" fontSize="medium" />
          </StyledBadge>
        </NavLink>
      </IconButton>
    </Box>
  );
}

// COMPONENTES MATERIAL-UI
import { Box, styled, Badge, IconButton } from "@mui/material";

// ICONOS MATERIAL-UI
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContext } from "react";
import { Context } from "../../Context";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "1px solid",
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  const { itemsAddedQuantity } = useContext(Context);

  return (
    <Box sx={{ mx: 3, display: { xs: "none", sm: "flex" } }}>
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={itemsAddedQuantity < 1 ? 0 : itemsAddedQuantity.length}
          color="info"
        >
          <LocalMallIcon color="base" fontSize="medium" />
        </StyledBadge>
      </IconButton>
    </Box>
  );
}

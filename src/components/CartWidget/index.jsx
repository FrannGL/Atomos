// COMPONENTES MATERIAL-UI
import { Box, styled, Badge, IconButton } from "@mui/material";

// ICONOS MATERIAL-UI
import LocalMallIcon from "@mui/icons-material/LocalMall";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "1px solid",
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  return (
    <Box sx={{ mx: 3, display: { xs: "none", sm: "flex" } }}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="info">
          <LocalMallIcon color="base" fontSize="medium" />
        </StyledBadge>
      </IconButton>
    </Box>
  );
}

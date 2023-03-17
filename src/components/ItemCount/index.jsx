// COMPONENTES MATERIAL-UI
import { Box, IconButton, Typography } from "@mui/material";

// ICONOS MATERIAL-UI
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// HOOKS REACT
import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: 1,
        width: "26%",
        mb: 3,
      }}
    >
      <Box sx={{ border: 1, backgroundColor: "#040b16" }}>
        <IconButton color="base" onClick={() => setCount(count + 1)}>
          <AddIcon />
        </IconButton>
      </Box>
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>{count}</Typography>
      <Box sx={{ border: 1, backgroundColor: "#040b16" }}>
        <IconButton
          color="base"
          onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
        >
          <RemoveIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

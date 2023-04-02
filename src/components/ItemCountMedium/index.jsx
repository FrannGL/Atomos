import { Box, IconButton, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function ItemCountMedium() {
  const [count, setCount] = useState(1);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: 1,
        width: "40%",
        color: "white",
      }}
    >
      <Box sx={{ border: 1, backgroundColor: "white", height: "100%" }}>
        <IconButton
          color="black"
          disabled={count === 1}
          sx={{ padding: 0, color: "black" }}
          onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
        >
          <RemoveIcon />
        </IconButton>
      </Box>
      <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        {count}
      </Typography>
      <Box sx={{ border: 1, backgroundColor: "white", height: "100%" }}>
        <IconButton
          color="black"
          sx={{ padding: 0, color: "black" }}
          onClick={() => setCount(count + 1)}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

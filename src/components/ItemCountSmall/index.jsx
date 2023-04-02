import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function ItemCountSmall({ product }) {
  return (
    <>
      <Box width="10%" textAlign="center" sx={{ mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ border: 1, backgroundColor: "white", height: "100%" }}>
            <IconButton color="black" sx={{ padding: 0, color: "black" }}>
              <RemoveIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box
            sx={{
              border: 1,
              width: "100%",
              backgroundColor: "#ededed",
            }}
          >
            <Typography
              sx={{ fontSize: 20, fontWeight: "bold", color: "black" }}
            >
              {product.cantidad}
            </Typography>
          </Box>
          <Box sx={{ border: 1, backgroundColor: "white", height: "100%" }}>
            <IconButton color="black" sx={{ padding: 0, color: "black" }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

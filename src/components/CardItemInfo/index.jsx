import { Box, CardMedia } from "@mui/material";

export default function CardItemInfo(product) {
  console.log(product);

  return (
    <>
      <CardMedia
        image={product.typeimage}
        sx={{
          border: 1,
          width: 60,
          height: "100%",
        }}
      ></CardMedia>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "50%",
            border: 1,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          {product.category}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "50%",
            border: 1,
            textAlign: "center",
          }}
        >
          {product.ibu} - {product.abv}
        </Box>
      </Box>
    </>
  );
}

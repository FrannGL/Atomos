import { Box } from "@mui/material";
import Item from "../Item/index";

export default function ItemList({ products }) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        mt: 12,
        mb: 5,
      }}
    >
      {products.map((product, index) => (
        <Item product={product} key={product.id} component="li" />
      ))}
    </Box>
  );
}

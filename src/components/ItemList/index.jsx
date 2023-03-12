import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CardItem from "../CardItem/index";
import CardItemSkeleton from "../CardItemSkeleton";

export default function ItemList({ products }) {
  const [loading, setLoading] = useState(true);

  const famePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const data = async () => {
    try {
      await famePromise();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    data();
  }, []);

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
      {loading
        ? [1, 2, 3, 4].map((item) => <CardItemSkeleton key={item} />)
        : products.map((product, index) => (
            <CardItem product={product} key={product.id} component="li" />
          ))}
    </Box>
  );
}

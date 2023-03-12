import { Container } from "@mui/system";
import Footer from "../Footer";
import CardItemDetailSkeleton from "../CardItemDetailSkeleton";
import { useEffect, useState } from "react";
import CardItemDetail from "../CardItemDetail";

export default function ItemDetail({ product }) {
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
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {loading ? (
          <CardItemDetailSkeleton />
        ) : (
          <CardItemDetail product={product} />
        )}
      </Container>
      <Footer />
    </>
  );
}
